// import {NextApiRequest, NextApiResponse} from "next";
// import {google} from "../../node_modules/googleapis"
// type SheetForm={
//     Name: string
//     PhoneNumber: string
//     Description: string
// }
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) 
// {
//     if (req.method !== 'POST') {
//     return res.status(405).send({message: 'Only POST requests are allowed'})
// }
// const body = req.body as SheetForm


//     // prepare auth
//     const auth = new google.auth.GoogleAuth({
//     credentials: {
    
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
//     },
//     scopes: [
//     'https://www.googleapis.com/auth/drive',
//     'https://www.googleapis.com/auth/drive.file',
//     'https://www.googleapis.com/auth/spreadsheets',
//     ]
//     });
    
//     const sheets = google.sheets({
//     auth,
//     version: 'v4'
//     });


//     const response = await sheets.spreadsheets.values.append( { 
//         spreadsheetId: process.env.GOOGLE_SHEET_ID,
//         range: 'A1:D1',
//         valueInputOption: 'USER_ENTERED',
//         requestBody: {
//             values: [
//                 [body.Name, body.PhoneNumber, body.Description]
//             ]
//         }
//     });
    
//     return res.status( 200).json({
//     data: response.data
//     })

    
// }


import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { google } from "googleapis";

type SheetForm = {
  Name: string;
  PhoneNumber: string;
  Description: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Handle POST request
    const body = req.body as SheetForm;

    try {
      // Append data to Google Sheets
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });

      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "A1:C1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [body.Name, body.PhoneNumber, body.Description]
          ],
        },
      });

      // Send SMS using Sparrow SMS API
      const sparrowsmsConfig = {
        headers: {
          Authorization: `Bearer ${process.env.SPARROW_SMS_TOKEN}`,
        },
      };

      const smsData = {
        token: process.env.SPARROW_SMS_TOKEN,
        from: "Demo",
        to: body.PhoneNumber, // Assuming PhoneNumber is a valid 10-digit number of Nepal
        text : `Hey ${body.Name}! \nFeeling curious? \nReach out to learn more about our product at +9779843742684. \nWe're here for you! \n- Samparka`
      };
      
      const smsResponse = await axios.post(
        "https://api.sparrowsms.com/v2/sms/",
        smsData,
        sparrowsmsConfig
      );

      return res.status(200).json({
        message: "Data appended to Google Sheets and SMS sent successfully",
        smsResponse: smsResponse.data,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}


