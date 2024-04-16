import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { full_name, company_name, business_email, message, contact_no, token } =
      await req.json();

      //validating reCapchaToken
      let response=await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPCHA_SECRET_KEY}&response=${token}`, {
        method: "POST",
      }).catch((e) => console.log(e));
  
    

      response=await response.json()

    // console.log("recapcha success",response.success);

    //if reCapcha is success
    if(response.success){
        // Create a transporter using SMTP details
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          service: process.env.SMTP_SERVICE,
          port: process.env.SMTP_PORT,
          secure: process.env.SMTP_SECURE,
          logger: true,
          debug: process.env.SMTP_DEBUG,
          ignoreTLS: process.env.SMTP_IGNORETLS,
          auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD,
          },
        });
        // Create an email message
        let mailTo = process.env.RECEIVER_EMAILS?.split(",");

        const mailOptions = {
          from: process.env.SENDER_EMAIL,
          to: mailTo,
          subject: "Business Enquiries",
          // text: `
          // User Name: ${full_name}
          // Company Name: ${company_name}
          // Business Email: ${business_email}
          // Contact Number: ${contact_no}
          // Message: ${message}`,
          html:`<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>.card{box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; width: 100%;}.card:hover{box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);}.container{padding: 2px 16px;}</style></head><body><div class="card"> <div class="container"> <p><b>User Name: </b>${full_name}</p><p><b>Company Name: </b>${company_name}</p><p><b>Business Email: </b>${business_email}</p><p><b>Contact Number: </b>${contact_no}</p><p><b>Message: </b>${message}</p></div></div></body></html>`
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);

        console.log("Email sent:", info.response);
        return NextResponse.json({
          success: true,
          message: "Your free trial request has been sent!",
        });
    }else{
      return Response.json(
        {
          success: false,
          message: "Internal server error, token success failed",
        },
        { status: 500 }
      );
    }
    
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error, please try again and again",
      },
      { status: 500 }
    );
  }
}
