
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://d2ykdomew87jzd.cloudfront.net/certifications/_1200x630_crop_center-center_82_none/62790/Blog.jpg?mtime=1653678067);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">TEKUP GLSI-B</Typography>
                <Text variant="h5">I'm a Software Engineer based in TUNISIA. 
                    I've built websites, desktop applications and corporate software.<br />
                    If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        {/* <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link> */}
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        {/* <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram /> */}
                        {/* </Link> */}
                    </Box>  
                        or send me an Email 
                        {/* <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email /> */}
                        {/* </Link>. */}
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;