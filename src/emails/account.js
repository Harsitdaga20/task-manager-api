const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from: 'harsitdaga20@gmail.com',
        subject: 'Welcome to app',
        text:`welcome to the app, ${name}. Let us know about your experience.`
    })
}

const sendCancelEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from: 'harsitdaga20@gmail.com',
        subject: 'Deleting the account',
        text:`hello, ${name}. Let us know about your experience which leads you delete the account.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}