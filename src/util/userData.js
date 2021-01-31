import Image from '../img/ridwan.jpg';


const USERS_DATA = [
  {
    id: 1,
    role: 'Customer',
    routeName: 'customer',
    customers: [
      {
        id: 1,
        dateCreated: '28/01/2019',
        role: 'customer',
        status: 'Active',
        name: 'Ridwan',
        surname: 'Balogun',
        phone: "08078197526",
        accountType: 'Current',
        address: "Lagos, Nigeria",
        gender: 'male',
        email: 'balogunridwan@gmail.com',
        dob: '1989-04-21',
        accountNumber: 3042901179,
        balance: 34030.90,
        image: Image,
        line_manager:"Tunde",
        leave_balance:"304",
    
        transactions: [
          {
            id: 1,
            date: '16 Mar, 2019',
            beneficiary: 'Ibrahim Mukaila',
            bank: 'GTB',
            accountNumber: "56738929930",
            amount: 60000,
            status: 'Successful',
          },
          {
            id: 2,
            date: '13 Apr, 2019',
            beneficiary: 'Barakat Obatade',
            bank: 'First Bank',
            accountNumber: "12738929967",
            amount: 13000,
            status: 'Successful',
          },
          {
            id: 3,
            date: '25 Jan, 2019',
            beneficiary: 'Zaynab Opayomi',
            bank: 'U.B.A',
            accountNumber: "04738929997",
            amount: 8000,
            status: 'Failed',
          },
          {
            id: 4,
            date: '05 Jul, 2019',
            beneficiary: 'Hikmah Raji',
            bank: 'Zenith',
            accountNumber: "89738567497",
            amount: 15000,
            status: 'Failed',
          },
          
        ],
      },
      {
        id: 2,
        dateCreated: '13/12/2019',
        role: 'customer',
        name: 'Kamar',
        status: 'Inactive',
        surname: 'Olayanju',
        phone: "07063818194",
        accountType: 'Savings',
        address: "Iseyin, Oyo, Nigeria",
        gender: 'male',
        email: 'olakams@gmail.com',
        dob: '1956-11-25',
        accountNumber: 5623894782,
        balance: 1000890.90,
        imageUrl: '../../../src/img/olakams.jpg',
        line_manager:"Tunde",
        leave_balance:"304",
    
        transactions: [
          {
            id: 1,
            date: '09 Dec, 2019',
            beneficiary: 'Ayo Tola',
            bank: 'GTB',
            accountNumber: "56738929930",
            amount: 60000,
            status: 'Successful',
          },
          {
            id: 2,
            date: '23 Apr, 2018',
            beneficiary: 'Feyi Kemi',
            bank: 'First Bank',
            accountNumber: "12738929967",
            amount: 13000,
            status: 'Successful',
          },
          {
            id: 3,
            date: '12 Feb, 2019',
            beneficiary: 'Temi Dayo',
            bank: 'U.B.A',
            accountNumber: "04738929997",
            amount: 8000,
            status: 'Failed',
          },
          {
            id: 4,
            date: '05 Jun, 2019',
            beneficiary: 'Ismail Tutu',
            bank: 'Zenith',
            accountNumber: "89738567497",
            amount: 15000,
            status: 'Failed',
          },
          
        ]
      },
      {
        id: 3,
        dateCreated: '8/01/2020',
        role: 'customer',
        name: 'Ibrahim',
        surname: 'Mukaila',
        status: 'Active',
        phone: "07063818194",
        accountType: 'Savings',
        address: "Iseyin, Oyo, Nigeria",
        gender: 'male',
        email: 'olakams@gmail.com',
        dob: '1956-11-25',
        accountNumber: 7586648687,
        balance: 68783.90,
        imageUrl: '../../../src/img/olakams.jpg',
        line_manager:"Tunde",
        leave_balance:"304",
    
        transactions: [
          {
            id: 1,
            date: '09 Dec, 2019',
            beneficiary: 'Ayo Tola',
            bank: 'GTB',
            accountNumber: "56738929930",
            amount: 60000,
            status: 'Successful',
          },
          {
            id: 2,
            date: '23 Apr, 2018',
            beneficiary: 'Feyi Kemi',
            bank: 'First Bank',
            accountNumber: "12738929967",
            amount: 13000,
            status: 'Successful',
          },
          {
            id: 3,
            date: '12 Feb, 2019',
            beneficiary: 'Temi Dayo',
            bank: 'U.B.A',
            accountNumber: "04738929997",
            amount: 8000,
            status: 'Failed',
          },
          {
            id: 4,
            date: '05 Jun, 2019',
            beneficiary: 'Ismail Tutu',
            bank: 'Zenith',
            accountNumber: "89738567497",
            amount: 15000,
            status: 'Failed',
          },
          
        ]
      },
    ],
  },
  {
    id: 2,
    role: 'Staff',
    routeName: 'staff',
    staffs: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 220
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 110
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 160
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 160
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 160
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 190
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 200
      }
    ]
  },
  {
    id: 3,
    role: 'Admin',
    routeName: 'admin',
    admins: [
      {
        id: 1,
        role : 'Admin', 
        fname : 'Stephen', 
        lname : 'Ajibade', 
        phone: '00744028038083', 
        accountNumber: "Not applicable", 
        transactions: "Add later",
        image: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90
      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185
      }
    ]
  },
  
]

export default USERS_DATA;

// const USERS_DATA = [
//   {
//     customers: [
//     {
//       role: 'customer',
//       status: 'active',
//       name: 'Ridwan',
//       surname: 'Balogun',
//       phone: "08078197526",
//       accountType: 'Current',
//       address: "Lagos, Nigeria",
//       gender: 'male',
//       email: 'balogunridwan@gmail.com',
//       dob: '1989-04-21',
//       accountNumber: 3042901179,
//       balance: 34030.90,
//       image: Image,
  
//       transactions: [
//         {
//           id: 1,
//           date: '16 Mar, 2019',
//           beneficiary: 'Ibrahim Mukaila',
//           bank: 'GTB',
//           accountNumber: "56738929930",
//           amount: 60000,
//           status: 'Successful',
//         },
//         {
//           id: 2,
//           date: '13 Apr, 2019',
//           beneficiary: 'Barakat Obatade',
//           bank: 'First Bank',
//           accountNumber: "12738929967",
//           amount: 13000,
//           status: 'Successful',
//         },
//         {
//           id: 3,
//           date: '25 Jan, 2019',
//           beneficiary: 'Zaynab Opayomi',
//           bank: 'U.B.A',
//           accountNumber: "04738929997",
//           amount: 8000,
//           status: 'Failed',
//         },
//         {
//           id: 4,
//           date: '05 Jul, 2019',
//           beneficiary: 'Hikmah Raji',
//           bank: 'Zenith',
//           accountNumber: "89738567497",
//           amount: 15000,
//           status: 'Failed',
//         },
        
//       ],
//     },
//     {
//       role: 'customer',
//       name: 'Kamar',
//       status: 'deactive',
//       surname: 'Olayanju',
//       phone: "07063818194",
//       accountType: 'Savings',
//       address: "Iseyin, Oyo, Nigeria",
//       gender: 'male',
//       email: 'olakams@gmail.com',
//       dob: '1956-11-25',
//       accountNumber: 5623894782,
//       balance: 1000890.90,
//       imageUrl: '../../../src/img/olakams.jpg',
  
  
//       transactions: [
//         {
//           id: 1,
//           date: '09 Dec, 2019',
//           beneficiary: 'Ayo Tola',
//           bank: 'GTB',
//           accountNumber: "56738929930",
//           amount: 60000,
//           status: 'Successful',
//         },
//         {
//           id: 2,
//           date: '23 Apr, 2018',
//           beneficiary: 'Feyi Kemi',
//           bank: 'First Bank',
//           accountNumber: "12738929967",
//           amount: 13000,
//           status: 'Successful',
//         },
//         {
//           id: 3,
//           date: '12 Feb, 2019',
//           beneficiary: 'Temi Dayo',
//           bank: 'U.B.A',
//           accountNumber: "04738929997",
//           amount: 8000,
//           status: 'Failed',
//         },
//         {
//           id: 4,
//           date: '05 Jun, 2019',
//           beneficiary: 'Ismail Tutu',
//           bank: 'Zenith',
//           accountNumber: "89738567497",
//           amount: 15000,
//           status: 'Failed',
//         },
        
//       ]
//     },
//     {
//       role: 'customer',
//       name: 'Ibrahim',
//       surname: 'Mukaila',
//       phone: "07063818194",
//       accountType: 'Savings',
//       address: "Iseyin, Oyo, Nigeria",
//       gender: 'male',
//       email: 'olakams@gmail.com',
//       dob: '1956-11-25',
//       accountNumber: 7586648687,
//       balance: 68783.90,
//       imageUrl: '../../../src/img/olakams.jpg',
  
  
//       transactions: [
//         {
//           id: 1,
//           date: '09 Dec, 2019',
//           beneficiary: 'Ayo Tola',
//           bank: 'GTB',
//           accountNumber: "56738929930",
//           amount: 60000,
//           status: 'Successful',
//         },
//         {
//           id: 2,
//           date: '23 Apr, 2018',
//           beneficiary: 'Feyi Kemi',
//           bank: 'First Bank',
//           accountNumber: "12738929967",
//           amount: 13000,
//           status: 'Successful',
//         },
//         {
//           id: 3,
//           date: '12 Feb, 2019',
//           beneficiary: 'Temi Dayo',
//           bank: 'U.B.A',
//           accountNumber: "04738929997",
//           amount: 8000,
//           status: 'Failed',
//         },
//         {
//           id: 4,
//           date: '05 Jun, 2019',
//           beneficiary: 'Ismail Tutu',
//           bank: 'Zenith',
//           accountNumber: "89738567497",
//           amount: 15000,
//           status: 'Failed',
//         },
        
//       ]
//     },
//   ]},
//   {staff: [
//     {
//       id: 1,
//       role: 'staff',
//       // fname: 'Ridwan',
//       // lname: 'Balogun',
//       // phone: "08078197526",
//       // address: "Lagos, Nigeria",
//       // gender: 'male',
//       // email: 'balogunridwan@gmail.com',
//       // dob: '1989-04-21',
//       // accountNumber: 3042901179,
//       // balance: 34030.90,
//       // imageUrl: '../../../src/img/ridwan.jpg',
  
  
//       transactions: [
//         {
//           id: 1,
//           date: '16 Mar, 2019',
//           beneficiary: 'Ibrahim Mukaila',
//           bank: 'GTB',
//           accountNumber: "56738929930",
//           amount: 60000,
//           status: 'Successful',
//         },
//         {
//           id: 2,
//           date: '13 Apr, 2019',
//           beneficiary: 'Barakat Obatade',
//           bank: 'First Bank',
//           accountNumber: "12738929967",
//           amount: 13000,
//           status: 'Successful',
//         },
//         {
//           id: 3,
//           date: '25 Jan, 2019',
//           beneficiary: 'Zaynab Opayomi',
//           bank: 'U.B.A',
//           accountNumber: "04738929997",
//           amount: 8000,
//           status: 'Failed',
//         },
//         {
//           id: 4,
//           date: '05 Jul, 2019',
//           beneficiary: 'Hikmah Raji',
//           bank: 'Zenith',
//           accountNumber: "89738567497",
//           amount: 15000,
//           status: 'Failed',
//         },
        
//       ]
//     },
//     {
//       id: 2,
//       role: 'customer',
//       fname: 'Kamar',
//       lname: 'Olayanju',
//       phone: "07063818194",
//       address: "Iseyin, Oyo, Nigeria",
//       gender: 'male',
//       email: 'olakams@gmail.com',
//       dob: '1956-11-25',
//       accountNumber: 5623894782,
//       balance: 1000890.90,
//       imageUrl: '../../../src/img/olakams.jpg',
  
  
//       transactions: [
//         {
//           id: 1,
//           date: '09 Dec, 2019',
//           beneficiary: 'Ayo Tola',
//           bank: 'GTB',
//           accountNumber: "56738929930",
//           amount: 60000,
//           status: 'Successful',
//         },
//         {
//           id: 2,
//           date: '23 Apr, 2018',
//           beneficiary: 'Feyi Kemi',
//           bank: 'First Bank',
//           accountNumber: "12738929967",
//           amount: 13000,
//           status: 'Successful',
//         },
//         {
//           id: 3,
//           date: '12 Feb, 2019',
//           beneficiary: 'Temi Dayo',
//           bank: 'U.B.A',
//           accountNumber: "04738929997",
//           amount: 8000,
//           status: 'Failed',
//         },
//         {
//           id: 4,
//           date: '05 Jun, 2019',
//           beneficiary: 'Ismail Tutu',
//           bank: 'Zenith',
//           accountNumber: "89738567497",
//           amount: 15000,
//           status: 'Failed',
//         },
        
//       ]
//     },
//   ]},
//   {admin: [

//   ]},

  
// ]




