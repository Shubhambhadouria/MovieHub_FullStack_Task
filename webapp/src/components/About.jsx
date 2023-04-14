import React from "react";
import useStyles from "./style";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SportsGolfIcon from "@mui/icons-material/SportsGolf";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images1 = [
  {
    label: "movie1",
    imgPath:
      "https://th.bing.com/th/id/OIP.b4v7cmaxzVMrCyMm8koRCgHaEK?pid=ImgDet&rs=1",
  },
  {
    label: "college picture2",
    imgPath:
      "https://th.bing.com/th/id/R.9d2a8560fb8af85f0e59150bff8110a7?rik=VsPnpOCP%2f%2fpBNg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-V7sBEMn1OJ8%2fT577V9I0anI%2fAAAAAAAAADo%2f4hV_d5-MjkU%2fs1600%2finbred-poster-trains-LANDSCAPE.jpg&ehk=8kC6mhCaon7OFNQY8IK8Rj0KAxzSNn5iYDZaUPiUmLA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "graduation day",
    imgPath:
      "https://th.bing.com/th/id/OIP.rCENCNraoHqz3rZ8xw3vMwHaE9?pid=ImgDet&w=1600&h=1072&rs=1",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/R.a2384d62f001107475ef0ad208f87dce?rik=%2fs4eQUSpLz13Zg&riu=http%3a%2f%2fwww.djfood.org%2fwp-content%2fuploads%2f2017%2f03%2fKing-Skull-Island-landscape.jpg&ehk=%2bTIunl320j4nuWh%2bL65mOmwYWyKi32sV2gT1LKh4b%2fw%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "college picture1",
    imgPath:
      "https://th.bing.com/th/id/OIP.b4v7cmaxzVMrCyMm8koRCgHaEK?pid=ImgDet&rs=1",
  },
  {
    label: "college picture2",
    imgPath:
      "https://th.bing.com/th/id/R.9d2a8560fb8af85f0e59150bff8110a7?rik=VsPnpOCP%2f%2fpBNg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-V7sBEMn1OJ8%2fT577V9I0anI%2fAAAAAAAAADo%2f4hV_d5-MjkU%2fs1600%2finbred-poster-trains-LANDSCAPE.jpg&ehk=8kC6mhCaon7OFNQY8IK8Rj0KAxzSNn5iYDZaUPiUmLA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "graduation day",
    imgPath:
      "https://th.bing.com/th/id/OIP.rCENCNraoHqz3rZ8xw3vMwHaE9?pid=ImgDet&w=1600&h=1072&rs=1",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/R.a2384d62f001107475ef0ad208f87dce?rik=%2fs4eQUSpLz13Zg&riu=http%3a%2f%2fwww.djfood.org%2fwp-content%2fuploads%2f2017%2f03%2fKing-Skull-Island-landscape.jpg&ehk=%2bTIunl320j4nuWh%2bL65mOmwYWyKi32sV2gT1LKh4b%2fw%3d&risl=&pid=ImgRaw&r=0",
  },
];

const images2 = [
  {
    label: "movie1",
    imgPath:
      "https://th.bing.com/th/id/R.9ce920118f16e27717829821d10321e3?rik=9kMjFZqJGYdaUg&riu=http%3a%2f%2fanniehaydesign.weebly.com%2fuploads%2f9%2f5%2f4%2f6%2f95469676%2flandscape-poster-3_orig.jpg&ehk=LZzIZURLnfIgbZWCYaPnqLJnGGs2tu1U0VXEsI%2b5%2flU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "college picture2",
    imgPath: "https://i.redd.it/atyf1poo8oe31.jpg",
  },
  {
    label: "graduation day",
    imgPath:
      "https://th.bing.com/th/id/R.3289991d62cf58113faf28200ff5762f?rik=jpyES3gtkz%2bdYQ&riu=http%3a%2f%2fwww.plakatwelten.de%2fwp-content%2fuploads%2f2009%2f09%2fbanishment_ver2.jpg&ehk=6vio0PDaFUY6NGkxWmmEDtOU3TEIMe5s0aTQm8ELnHU%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/R.b986e5d7aec380eda35e11972806afb5?rik=xO%2b2rH3Q9vqi2g&riu=http%3a%2f%2fsugarscape.cdnds.net%2f15%2f41%2f1600x800%2flandscape-1444141867-5th-wave-international-film-posterjpg.jpeg&ehk=Fpwz9irW9wQnIyqh%2f8lvVometzTPBft34CKqvy0MSF8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "college picture1",
    imgPath:
      "https://th.bing.com/th/id/OIP.zfNO_fnEX5aThCFRUlTrEAHaEK?pid=ImgDet&rs=1",
  },
  {
    label: "college picture2",
    imgPath:
      "https://tokyofox.files.wordpress.com/2017/03/the-forest.jpg?w=1200",
  },
  {
    label: "graduation day",
    imgPath:
      "https://i1.wp.com/www.plakatwelten.de/wp-content/uploads/2009/09/horton_hears_a_who_ver10_xlg.jpg?fit=1500%2C594",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/OIP.F0HG0mOv3mxaA3S8H077PQHaEK?pid=ImgDet&rs=1",
  },
];

const images3 = [
  {
    label: "movie1",
    imgPath: "https://i.redd.it/w790fpgzd8p31.jpg",
  },
  {
    label: "college picture2",
    imgPath:
      "https://th.bing.com/th/id/OIP.tEvdatx4QmIlqEyw0dE_NwHaEK?pid=ImgDet&rs=1",
  },
  {
    label: "graduation day",
    imgPath:
      "https://th.bing.com/th/id/R.35a7114c4b6f1d27a03cf68d3a7fa1f4?rik=VLCtro3%2fUv1fPg&riu=http%3a%2f%2fwww.themovieblog.com%2fwp-content%2fuploads%2f2016%2f06%2fTAS-POSTER_LANDSCAPE_1296x720.jpg&ehk=b02UxXfbkjG8w7uW9S3bAykqFm7Lb4oywLkI%2bux6Qng%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/R.00c3b8318679a60a46d33f84edfc5f25?rik=MZa52f4Lux4tag&riu=http%3a%2f%2f3.bp.blogspot.com%2f-71SSbTxJ2Hc%2fUsLjvtqZhBI%2fAAAAAAAAAxQ%2fM8p2yvAOCdg%2fs1600%2fthe-hobbit-an-unexpected-journey-4.jpg&ehk=bd3u0KpbFdzBrpoYNjork6sdpa8ia78vmsVvTg5o%2fSc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "college picture1",
    imgPath:
      "https://th.bing.com/th/id/R.226afe9c089d88f08210289aa91f2f87?rik=4clI74TH5kNo1g&riu=http%3a%2f%2fwww.davidleancinema.org.uk%2fwp-content%2fuploads%2f2017%2f07%2fDunkirk-Landscape-656x328.jpg&ehk=QKa66hxTweYOjP0PEQYE4SHU0zIIBmaHpgv3GoCnx2g%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    label: "college picture2",
    imgPath:
      "https://cps-static.rovicorp.com/2/Open/MovieDB_2462/Program/8164994/_derived_jpg_q90_584x800_m0/8164994PA_4-3The-Dark-Knigh.jpg",
  },
  {
    label: "graduation day",
    imgPath:
      "https://images.template.net/wp-content/uploads/2017/01/04144253/Double-Exposure-landscape-Poster.jpg",
  },
  {
    label: "classrooms",
    imgPath:
      "https://th.bing.com/th/id/R.c3637a084ad44d2367493313e80c253d?rik=WcYFGfir3RuLXg&riu=http%3a%2f%2fwww.covertr.com%2fattachment.php%3fattachmentid%3d65076%26thumb%3d1%26d%3d1495010394&ehk=Ssxh15WfZPlYKJpUSR0t8n8l9neIz5NT4b8x0UJS%2b%2fM%3d&risl=&pid=ImgRaw&r=0",
  },
];

function About() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images1.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <>
        <main
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURExUYHSggGBolGxUVITEhJSkrOi4uFx8/ODMtNygtLisBCgoKDQ0NDw0NDysZFRkrKys3Ny0rKzctKzcrLTcrLS0tLS0rLSstKystLSstKysrNy0tKysrKys3Ky0rKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQIDBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAQIREv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EABgRAQEBAQEAAAAAAAAAAAAAAAABEQIS/9oADAMBAAIRAxEAPwDzyHChx9seMcXExUaZqo0jONMqxWmWmWeWuW459NMtcsstsukcemmWmUZaZdI4dLhwoqNRzpgGrIAAAjKgVTVVNKsRWemtZaZrryy0y020x05125ZaZabaZacq7cstIrTTOsOsRU1VTUbiaVOlUrREZIqocKHCIcXERUaZq40yzi8rGK1y0yyy1y3HPprlrlllpl0jj03y0yxzWuXSOHTSKRFRqOdUaYasmCMAQIBU06mpWonTPS9M9M105Z6ZaaarLTnXflnpnppplpzrryz0ir0zrDrE1NVU1G4mlTpVK0QBIpmk4CoqJiorNXFxnKuVWK0zWuaxlaZrcYsbZrXNYZrTNblcbG+a1zWGa0zp0lcuo2lXKxlXNN65WNJT6iU+rrGKCejppiulaXS6aYdqbSuk3Sa3INVnqi6Z6rFrpzC1WWqrVZ6rFrtInVZaq9VnquddZE6Z1VqLWXSFU07U1G4RHSZaIAADiTBXTlScEXKuVnKqVpmxrKuVjKuVWLG+a0zWGavNalc7HRmtM6c80uadJXOx0TS5pzzS5pqVzvLeaOaYzR+mtY8tvQ9MvQ9LqeWnovTP0XpNWcrukXSbpN0lrU5PWkWldI1pi10kGtM9Ua0z1WLXWQWs9U7UWsOkhWptFqbUbkFqei0mWgQIUAgig0mB9UgxFyqlZqlVGkq5WUqpWmbGsrSaYSrlVixvNLmnPKuaalYsdE0qac80qaalYvLomj9MJo/TXpny29D0y9D0ek8tfRXTL0V0el8tLpN0i6TdM2tTlV0i6TdJumbW5DukWlam1luQWotFqbUbkFqbRaVrLUgIiRTIF0Uy6ALhGQFM0gTFnKjpyiYuVUrOU5VTGsqpWUqpV1mxrKqVjKqaVmxtKqaYzR+l1nG3o/TH0fpdZ8tvQ9MfQ9Gnlt6L0y9F6NPLS6K6Z3RXSa15Xam1FpWosh2ptK1Nqa3IdpWlam1Naw+kXS6i4ZAhcMgBQAXQASEFdNIBQSfVFdPqQJi+q6z6fRMaSn1nKfV1Ma9PrLp9XWcadP0y6fTTGno/TL0PS6mNOjrPo6mmL6XUdLpq4u1Nqel1NXFdLqel1GsO0ukBcMi6BTIggYIAAQ6KQ6RgYIAZpHQV0+oPoK6fUdPoi+jqOn1TF9HU9HRMX0dR0dDF9HUdHRMX0dR0dDFdHU9HRcPo6no6Lh9LpdLqCul0ugUyLoAwQAyIAYIAAQRcMdIBhggGGZDqhgugFdHUn0Q+jpAFdHU9HQxXR1PR0FdHUjoYrpdIAfR0iA+gh0UyAAAuhDD6OkAwwQDDBAMIEDVMEDQwQNDMgKYICGCAGCAKHUgMV0J6AxREAwwQDDBADBADIAACBoYIGhggaGCBqgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==)",
            backgroundSize: "cover", // or "contain"
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className={classes.abouthead}>Welcome to What's on MovieHub</h1>

          <h6 className={classes.aboutpara}>
            MovieHub is a place where you can find your favorite movie in terms
            of genre, rating, release Date etc.,Movie Hub is an American
            subscription video on-demand over-the-top streaming and rental
            service of MovieHub offered as a standalone service or as part of
            MovieHub's Prime subscription.
          </h6>

          <h6 className={classes.aboutpara}>
            The service primarily distributes films and television series
            produced by MovieHub Studios and MGM Holdings or licensed to
            MovieHub, as MovieHub Originals, with the service also hosting
            content from other providers, content add-ons, live sporting events,
            and video rental and purchasing services.
          </h6>

          <h6 className={classes.aboutpara}>
            Operating worldwide, the service may require a full Prime
            subscription to be accessed. In countries such as the United States,
            United Kingdom, and Germany, the service can be accessed without a
            full Prime subscription, whereas in Australia, Canada, France,
            India, Turkey, and Italy, it can only be accessed through a
            dedicated website. Prime Video additionally offers a content add-on
            service in the form of channels, called MovieHub Channels, or Prime
            Video Channels, which allow users to subscribe to additional video
            subscription services from other content providers within Prime
            Video.
          </h6>

          <Box sx={{ maxWidth: "32%" }} className={classes.box1}>
            <Typography variant="h3" align="center" color="purple"></Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images1.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "400px",
                        width: "550px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
            /> */}
          </Box>
          <Box sx={{ maxWidth: "32%" }} className={classes.box1}>
            <Typography variant="h3" align="center" color="purple"></Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images2.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "400px",
                        width: "550px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
            /> */}
          </Box>
          <Box sx={{ maxWidth: "32%" }} className={classes.box1}>
            <Typography variant="h3" align="center" color="purple"></Typography>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images3.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "400px",
                        width: "550px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
            /> */}
          </Box>

          <h1 className={classes.abouthead}>Terms of Service</h1>
          <h6 className={classes.aboutpara}>
            The website and the solutions are operated and managed by separate
            entities. Refsnes Data offers the website (w3schools.com) including
            all its content, information, and related tools. The solutions (Such
            as Spaces, Courses, and My learning) and billing system are operated
            by W3schools Network. The two entities are separately responsible
            for the services that they provide, manage and operate.
          </h6>
          <h6 className={classes.aboutpara}>
            Throughout the site, the terms "we", "us" and "our" refer to Refsnes
            Data and W3schools Network. By visiting our site and/or purchasing
            something from us, you engage in our "Service" and agree to be bound
            by the following terms and conditions ("Terms of Service", "Terms"),
            including those additional terms and conditions and policies
            referenced herein and/or available by hyperlink. These Terms of
            Service apply to all users of the site, including without limitation
            users who are browsers, vendors, customers, merchants, and/or
            contributors of content.
          </h6>
          <h6 className={classes.aboutpara}>
            Please read these Terms of Service carefully before accessing or
            using our website or services. By accessing or using any part of the
            site, you agree to be bound by these Terms of Service. If you do not
            agree to all the terms and conditions of this agreement, then you
            may not access the website or use any services.
          </h6>
          <h6 className={classes.aboutpara}>
            Any new features or tools which are added to the current site shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those changes.
          </h6>
          <h1 className={classes.abouthead}>Site Usage</h1>
          <h6 className={classes.aboutpara}>
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your state or province of residence, or
            that you are the age of majority in your state or province of
            residence and you have given us your consent to allow any of your
            minor dependents to use this site.
          </h6>
          <h6 className={classes.aboutpara}>
            Access to services may require you to register an account. This
            could require you to provide information about yourself such as
            name, email address and credit card details.
          </h6>
          <h6 className={classes.aboutpara}>
            The account information and the use of data is subject to our
            Privacy Policy (https://www.moviehub.com/about/about_privacy.asp)
            You may not use our products for any illegal or unauthorized purpose
            nor may you, in the use of the Service, violate any laws in your
            jurisdiction (including but not limited to copyright laws). You are
            responsible for complying with any law, rules, and regulations
            applicable to you.
          </h6>
          <h6 className={classes.aboutpara}>
            You must not transmit any worms or viruses or any code of a
            destructive nature. A breach or violation of any of our Terms can
            result in an immediate termination of your Services. We reserve the
            right to remove or restrict your account and to remove content such
            as websites and other user-created data at any time at our sole and
            absolute discretion.
          </h6>
        </main>
      </>
    </div>
  );
}

export default About;
