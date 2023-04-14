import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    body : {
        backgroundColor : 'blue'
    },
    container : {
        height : '100%',
        display : 'block',
        
    },
    cardGrid : {
        height : '100%',
        paddingTop: '20px 0px',
        overflow : 'visible'
    },
    card : {
        height: '100%',
        display : 'flex',
        flexDirection : 'column',
        marginTop : '50px',
        backgroundColor : 'black',
        color : 'white',
    },
    cardMedia : {
        paddingTop : '56.25%',
        width : '100%'
    },
    cardContent : {
        flexGrow : 1
    },
    footer : {
        backgroundColor : theme.palette.background.paper,
        padding : '50px 0px'
    },
    about : {
        marginLeft : '50px',
        cursor : 'pointer',
        textDecoration: 'none',
        color : 'white',
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    aboutop : {
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    homelink : {
        display : 'flex',
        textDecoration : 'none',
        color : 'white',
        '&:hover': {
            textDecoration : 'none' 
        },
    },
    login : {
        marginLeft : '85%',
        cursor : 'pointer',
        color : 'white'
    },
    loginicon : {
        cursor : 'pointer'
    },
    home : {
        cursor : 'pointer'
    },
    homeicon : {
        cursor : 'pointer',
        marginTop : '3px',
        color : 'white'
    },
    addbtn : {
        marginTop : '15px',
        fontWeight : 'bold',
        
    },
    cardaction : {
        display : 'flex',
        marginTop : '-75px',
        justifyContent: 'space-between',
        padding : '20px'
    },
    heading : {
        marginTop : '25px',
        marginBottom : '25px',
    },
    boxinput : {
        width : '40%',
        margin : 'auto'
    },
    movtitle : {
        fontStyle : 'bolder',
    },
    updatebtn : {
        height : '54px',
        fontWeight : 'bold'
    },
    submitbtn : {
        height : '54px',
        fontWeight : 'bold',
    },
    updateMovie : {
        fontSize : '34px',
    },
    abouthead : {
        textAlign : 'left',
        marginLeft : '3%',
        color : 'white',
        marginTop : '0',
        paddingTop : '20px'
    },
    appbar : {
        backgroundColor : 'black',
    },
    box1 : {
        margin : 'auto',
        display : 'inline-block'
    },
    message : {
        color : 'red',
        cursor : 'default',
        '&:hover': {
            backgroundColor : '#fafafa',
        },
    },
    aboutpara : {
        textAlign : 'left',
        marginLeft : '3%',
        color : 'white',
        width : '1400px',
        fontSize : '18px'
    },
    footer : {
        color : 'white',
        paddingTop : '100px',
        textAlign : 'center',
        backgroundColor : '#023a5f',
        fontWeight : 'bolder',
        fontSize : '20px',
    },
    main : {
        backgroundColor : '#023a5f',
        height : '120%',
        display : 'block'
    },
    searchPage : {
        display : 'block'
    },
    searchinput : {
        marginTop : '20px'
    },
    message1 : {
        color : 'red',
        display : 'flex',
        paddingLeft : '109px',
        margin : 'auto',
    },
    message2 : {
        color : 'red',
        paddingLeft : '30px',
    },
    message3 : {
        color : 'red',
        paddingLeft : '20px',
    },
    message4 : {
        color : 'red',
        paddingLeft : '30px',
    },
    message5 : {
        color : 'red',
        paddingLeft : '20px',
    },
    message6 : {
        color : 'red',
        paddingLeft : '65px',
    },
    message7 : {
        color : 'red',
        paddingLeft : '85px',
    }
}));

export default useStyles