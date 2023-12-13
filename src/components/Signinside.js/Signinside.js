import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import "/Users/harshsahcdeva/Desktop/projects/react/website/src/App.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from  "/Users/harshsahcdeva/Desktop/projects/react/website/src/1.png";

const BigCard = () => {
  return (
    <div>
      <img src={image} alt="Description of the " style={{ width: ' 300px', height: 'auto' }} />
    </div>
  );
};
const BasicCard = () => (
  <Card sx={{ minWidth: 150, maxWidth: 200 }}>
  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z" fill="#165DFF" fill-opacity="0.1" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg> 
    <Typography
      sx={{
        borderRadius:'100px',
        color: 'var(--grey-900, #19191A)',
        textAlign: 'right',
        fontFamily: 'Inter',
        fontSize: '9.1px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '10.92px',
        // mt: 1, // Optional margin-top
        // mb: 4, // Optional margin-bottom
      }}
    >
      Save
    </Typography>
    
   
  </CardContent>
  <Typography sx={{ 
  color: 'var(--grey-900, #19191A)',
  maxWidth:'120px',
  marginLeft:'15px',
  fontFamily: 'Inter',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%',
  }} color="text.secondary" gutterBottom>
  We'll be sending notifications to you here
      </Typography>
  <CardActions>
  <Box
        display="flex"
        width="161.7px"
        height="35px"
        padding="8.4px 11.2px"
        alignItems="center"
        gap="7px"
        flexShrink={0}
        borderRadius="5.6px"
        border="0.7px solid var(--neutral-300, #D4D4D4)"
        background="#FFF"
      >
      </Box>
    {/* <Button size="small">Learn More</Button> */}
  </CardActions>
</Card>

);
const FooterCard = ({ name, position, quote }) => (
  <Card
    sx={{
      
// gap: '20px',
      display: 'flex',
      width: '353px',
      padding: '20px',
      paddingLeft: '20px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderRadius: '12px',
      background: 'var(--White, #FFF)',
      boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.04)',
    }}
  >
    <Typography
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
      }}
    >
      <h4 className="headingh4">{name}</h4>
      <h5 className="headingh5">{position}</h5>
    </Typography>

    <Typography
      sx={{
        color: 'var(--text-5, #1D2129)',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '120%',
        paddingBottom: '15px',
      }}
    >
      {quote}
    </Typography>
  </Card>
);

const TickIcon = () => (
  <div
  style={{
    display: 'flex',
    width: '14px',  // Make it smaller (adjust size as needed)
    height: '14px', // Make it smaller (adjust size as needed)
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '4.2px',
    background: 'var(--blue-blue, #0071E3)',
  }}
>
  <DoneTwoToneIcon style={{ color: 'white', fontSize: '12px' }} />
</div>
);

const BasicCardSecondType = () => (
  <Card sx={{ minWidth: 150, maxWidth: 200 }}>
  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
  <path d="M23.0996 25.9004V11.9004" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.7002 25.9V3.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.2998 25.9V17.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <Typography>
     <TickIcon/>
    </Typography>
    
   
  </CardContent>
  <Typography sx={{ 
    marginTop:'30px',
  color: 'var(--grey-900, #19191A)',
  maxWidth:'180px',
  marginLeft:'15px',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%',
  }} color="text.secondary" gutterBottom>
Notify me when any wallets
move more than      </Typography>
  <CardActions>
  <Box
    sx={{
      display: 'inline-flex',
      padding: '4.2px',
      alignItems: 'flex-start',
      gap: '2.8px',
      borderRadius: '2.8px',
      background: 'var(--grey-50, rgba(229, 229, 230, 0.50))',
      fontSize:'10px',
    }}

  >
    $1,000.00
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="15"
      viewBox="0 0 12 12"
      fill="none"

    >
      <path d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z" fill="#96979A" />
    </svg>
  </Box>   
  </CardActions>
</Card>

);
const BasicCardThirdType = () => (
  <Card sx={{ minWidth: 150, maxWidth: 200 }}>
  <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
<path d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.4004 7V14L19.0671 16.3333" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <Typography>
     <TickIcon/>
    </Typography>
    
   
  </CardContent>
  <Typography sx={{ 
    marginTop:'10px',
  color: 'var(--grey-900, #19191A)',
  maxWidth:'180px',
  marginLeft:'15px',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%',
  }} color="text.secondary" gutterBottom>
Notify me when any wallet dormant for 
</Typography>    
<Box
    sx={{
      display: 'inline-flex',
      marginLeft:'15px',
      padding: '4.2px',
      alignItems: 'flex-start',
      gap: '2.8px',
      borderRadius: '2.8px',
      background: 'var(--grey-50, rgba(229, 229, 230, 0.50))',
      fontSize:'10px',
    }}


  >
    {/* <ChevronRightIcon/> */}
    {'> 30 days'}
       <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="15"
      viewBox="0 0 12 12"
      fill="none"

    >
      <path d="M3.79965 4.59953L6.17719 6.97704C6.24553 7.04538 6.35633 7.04538 6.42467 6.97704L8.80215 4.59953C8.9124 4.48928 8.83435 4.30078 8.67839 4.30078H3.9234C3.76749 4.30078 3.68941 4.48928 3.79965 4.59953Z" fill="#96979A" />
    </svg>
  </Box> 
  <Typography sx={{ 
    marginTop:'12px',
  color: 'var(--grey-900, #19191A)',
  maxWidth:'180px',
  marginLeft:'15px',
  fontFamily: 'Inter',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%',
  }} color="text.secondary" gutterBottom>


becomes active    </Typography>

</Card>

);

function Copyright(props) {
  return (
    <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    sx={{
      marginTop:'20px',
      color: 'var(--grey-900, #19191A)',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '120%',
    }}
  >
    You’ll receive an email with an invite link to join.
  </Typography>
  );
}

const customStyles = {
  marginTop:'300px',
  fontFamily: 'Inter',
  fontSize: '39px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '120%',
  color: 'var(--grey-300, #B0B1B3)',
};

const SimpleSlider = () => {
  const sliderSettingsmain = {
    dots: false,
    slidesToShow: 1.5,  
    slidesToScroll: 1, 
    autoplay: true,
    arrows: false,
  };

  return (
    <Slider {...sliderSettingsmain}>
      <div className="cardmain">
        <BasicCard />
      </div>
      <div className="cardmain">
        <BasicCardSecondType />
      </div>
      <div className="cardmain">
        <BasicCardThirdType />
      </div>
    </Slider>
  );
};

const SimpleSliderFooter = () => {
  const sliderSettings = {
    dots: false,
    slidesToShow: 1.5, 
    slidesToScroll: 1, 
    autoplay: true,
    arrows: false,
  };

  return (
    <Slider {...sliderSettings}>
      <div className="card">
      <FooterCard name="Jack F" position="Ex Blackrock PM" quote="Love how Loch integrates portfolio analytics and whale watching into one unified app." />
      </div>
      <div className="card">
      <FooterCard name="Yash P" position="Research, 3poch Crypto Hedge Fund" quote="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!" />
      </div>
    </Slider>
  );
};
const HomePage = () => {
  return (
    <div>
    <div className="container-main">
      <div className="header">
        <div className="notification-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path opacity="0.2" d="M25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 17.4762 6.99984 13C6.99984 10.6131 7.94806 8.32387 9.63588 6.63604C11.3237 4.94821 13.6129 4 15.9998 4C18.3868 4 20.676 4.94821 22.3638 6.63604C24.0516 8.32387 24.9998 10.6131 24.9998 13C24.9998 17.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24Z" fill="white" />
            <path d="M27.7245 21.9925C27.0308 20.7975 25.9995 17.4163 25.9995 13C25.9995 10.3478 24.946 7.8043 23.0706 5.92893C21.1952 4.05357 18.6517 3 15.9995 3C13.3474 3 10.8038 4.05357 8.92846 5.92893C7.0531 7.8043 5.99953 10.3478 5.99953 13C5.99953 17.4175 4.96703 20.7975 4.27328 21.9925C4.09612 22.2963 4.0022 22.6415 4.00099 22.9931C3.99978 23.3448 4.09133 23.6906 4.2664 23.9956C4.44147 24.3006 4.69388 24.5541 4.99816 24.7304C5.30244 24.9068 5.64784 24.9997 5.99953 25H11.1008C11.3315 26.1289 11.9451 27.1436 12.8377 27.8722C13.7303 28.6009 14.8472 28.9989 15.9995 28.9989C17.1518 28.9989 18.2687 28.6009 19.1614 27.8722C20.054 27.1436 20.6676 26.1289 20.8983 25H25.9995C26.3511 24.9995 26.6964 24.9064 27.0005 24.73C27.3046 24.5535 27.5568 24.3 27.7317 23.9951C27.9066 23.6901 27.9981 23.3444 27.9968 22.9928C27.9956 22.6412 27.9016 22.2962 27.7245 21.9925ZM15.9995 27C15.3793 26.9998 14.7744 26.8074 14.268 26.4492C13.7617 26.0911 13.3788 25.5848 13.172 25H18.827C18.6203 25.5848 18.2374 26.0911 17.731 26.4492C17.2247 26.8074 16.6198 26.9998 15.9995 27ZM5.99953 23C6.96203 21.345 7.99953 17.51 7.99953 13C7.99953 10.8783 8.84238 8.84344 10.3427 7.34315C11.843 5.84285 13.8778 5 15.9995 5C18.1213 5 20.1561 5.84285 21.6564 7.34315C23.1567 8.84344 23.9995 10.8783 23.9995 13C23.9995 17.5063 25.0345 21.3412 25.9995 23H5.99953Z" fill="white" />
          </svg>
        </div>
        <h2>Get notified when a highly correlated whale makes a move</h2>
        <h4>
          Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
        </h4>
      </div>
 <div className="slidercontent">
    <SimpleSlider/>
    </div>
    </div>
    <div className="container-middle">
      <div>
        <BigCard/>
      </div>
      <div className="container-middle-header">
        <div className="notification-icon-eye">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path opacity="0.2" d="M16 7C6 7 2 16 2 16C2 16 6 25 16 25C26 25 30 16 30 16C30 16 26 7 16 7ZM16 21C15.0111 21 14.0444 20.7068 13.2221 20.1573C12.3999 19.6079 11.759 18.827 11.3806 17.9134C11.0022 16.9998 10.9031 15.9945 11.0961 15.0245C11.289 14.0546 11.7652 13.1637 12.4645 12.4645C13.1637 11.7652 14.0546 11.289 15.0245 11.0961C15.9945 10.9031 16.9998 11.0022 17.9134 11.3806C18.827 11.759 19.6079 12.3999 20.1573 13.2221C20.7068 14.0444 21 15.0111 21 16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21Z" fill="white"/>
<path d="M30.9137 15.595C30.87 15.4963 29.8112 13.1475 27.4575 10.7937C24.3212 7.6575 20.36 6 16 6C11.64 6 7.67874 7.6575 4.54249 10.7937C2.18874 13.1475 1.12499 15.5 1.08624 15.595C1.02938 15.7229 1 15.8613 1 16.0012C1 16.1412 1.02938 16.2796 1.08624 16.4075C1.12999 16.5062 2.18874 18.8538 4.54249 21.2075C7.67874 24.3425 11.64 26 16 26C20.36 26 24.3212 24.3425 27.4575 21.2075C29.8112 18.8538 30.87 16.5062 30.9137 16.4075C30.9706 16.2796 31 16.1412 31 16.0012C31 15.8613 30.9706 15.7229 30.9137 15.595ZM16 24C12.1525 24 8.79124 22.6012 6.00874 19.8438C4.86704 18.7084 3.89572 17.4137 3.12499 16C3.89551 14.5862 4.86686 13.2915 6.00874 12.1562C8.79124 9.39875 12.1525 8 16 8C19.8475 8 23.2087 9.39875 25.9912 12.1562C27.1352 13.2912 28.1086 14.5859 28.8812 16C27.98 17.6825 24.0537 24 16 24ZM16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88377 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7573 20.2426C12.5965 21.0818 13.6656 21.6532 14.8294 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3924 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.1159 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0768 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8863 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20Z" fill="white"/>
</svg>
        </div>
        <h2>Watch what the whales are doing</h2>
        <h4>
        All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.
        </h4>
      </div>
    </div>
 <div className="footer-above">
  <h4>Testimonials</h4>
 </div>
 <div className="line"></div>
    <div className="container-footer">
      <div className='icon'>
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" style={{ width: '60px', height: '60px', flexShrink: '0', fill: '#FFF' }}>
  <path d="M60 29.9444L52.7455 22.6898L52.7505 22.6848L30.067 0L22.8432 7.22386L22.8333 7.21393L0 30.0486L9.35245 39.4022L9.35742 39.3973L29.9608 60L39.3142 50.6464L39.3063 50.6385L60 29.9444ZM25.3947 36.7276L36.7409 25.3813L41.2991 29.9395L29.9529 41.2859L25.3947 36.7276ZM23.266 34.5989L18.7109 30.0437L30.0581 18.6973L34.6132 23.2525L23.266 34.5989ZM37.251 48.4363L32.156 43.3412L50.6475 24.8493L55.7426 29.9444L37.251 48.4363ZM30.067 4.25849L48.493 22.6838L43.398 27.779L24.972 9.3536L30.067 4.25849ZM22.8333 11.4724L27.9283 16.5675L16.5821 27.9149L16.5643 27.8971L9.33459 35.1269L4.25743 30.0486L22.8333 11.4724ZM29.9608 55.7425L11.4871 37.2675L16.5821 32.1724L35.0558 50.6464L29.9608 55.7425Z" fill="white"/>
</svg>
      </div>
      <div className='slidercontent-footer'>
      <SimpleSliderFooter/>
      </div>

    </div>
</div>  
  );
};
const defaultTheme = createTheme();
const BackgroundGrid = () => (
  <Grid
  
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
        width: '800px',
      height: '1190px',
      background: 'radial-gradient(92.19% 89.74% at 32.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <HomePage />
  </Grid>
);

// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';
// import { customStyles } from './yourCustomStyles'; // Import your custom styles
// import { validateEmail } from './yourValidationFunctions'; // Import your email validation function
// import Copyright from './Copyright'; // Import your Copyright component
const validateEmail = (email) => {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

const SignInForm = () => {
   const [email, setEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(validateEmail(newEmail));
  };

 const handleSubmit = (event) => {
  event.preventDefault();

  if (isValidEmail) {
    window.location.href = 'https://app.loch.one/welcome';
  } else {
    console.log('Please enter a valid email');
  }
};

  return (
    <Box
      sx={{
        width: '640px',
        height: '1060px',
        my: '4',
        mx: '4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        sx={{
          ...customStyles,
          display: 'flex',
          flexDirection: 'column',
          width: '390px',
          padding: '10px 28px',
          alignItems: 'left',
        }}
      >
        Sign up for <br /> exclusive access.
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <TextField
          placeholder="Your email address"
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
          error={!isValidEmail}
          helperText={!isValidEmail && 'Please enter a valid email'}
          sx={{
            width: '370px',
            padding: '20px 24px',
            borderRadius: '8px',
            background: '#FFF',
            border: 'none',
          }}
          InputProps={{
            sx: {
              color: 'var(--grey-200, #CACBCC)',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '120%', // 19.2px
              border: 'none',
              textAlign: 'left',
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            width: '320px',
            height: '45px',
            justifyContent: 'center',
            alignItems: 'center',
            flexShrink: 0,
            borderRadius: '8px',
            border: '1px solid var(--grey-900, #19191A)',
            background: 'var(--grey-900, #19191A)',
            '&:hover': {
              background: 'var(--grey-900, #19191A)',
            },
            mt: 1,
            mb: 2,
          }}
        >
          Get started
        </Button>
      </Box>
      <Copyright />
    </Box>
  );
};


const SignInSide = () => (
  <ThemeProvider theme={defaultTheme}>
    <div
      style={{
        width: '1440px',
        height: '1024px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'black',
      }}
    >
      <CssBaseline />
      <BackgroundGrid />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className='signinform'>
        <SignInForm/>
        </div>
      </Grid>
    </div>
  </ThemeProvider>
);

export default SignInSide;