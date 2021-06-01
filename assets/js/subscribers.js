// import mailchimp from "@mailchimp/mailchimp_marketing";
// // require('dotenv').config();
// // import dotenv from 'dotenv';
// // dotenv.config();

// mailchimp.setConfig({
//     apiKey: "f23d9b90d562659b2d2391fa4a7eceb6-us3",
//     server: "US3",
// });

// const listId = "c9ada9b3e5";
// const subscribingUser = {
//     firstName: "Lauren",
//     lastName: "Briggs",
//     email: "laurenbriggs41@gmail.com"
// };

// async function run() {
//     const response = await mailchimp.lists.addListMember(listId, {
//         email_address: subscribingUser.email,
//         status: "subscribed",
//         merge_fields: {
//             FNAME: subscribingUser.firstName,
//             LNAME: subscribingUser.lastName
//         }
//     });

//     console.log(
//         `Successfully added contact as an audience member. The contact's id is ${response.id
//         }.`
//     );

// }

// handleSubscribers(){
//     let newSubscriber = $('sub-email').value;
//     console.log(newSubscriber)
// }

// run();
