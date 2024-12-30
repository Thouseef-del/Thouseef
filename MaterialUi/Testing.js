import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
function Testing() {
    const [expanded, setExpanded] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <center>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    
    <Card sx={{ maxWidth: 345 }} >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="194"
      image='data:image/jpeg;base64,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'
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
          aside for 10 minutes.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
          medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
          occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
          large plate and set aside, leaving chicken and chorizo in the pan. Add
          pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
          stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Add rice and stir very gently to distribute. Top with artichokes and
          peppers, and cook without stirring, until most of the liquid is absorbed,
          15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
          mussels, tucking them down into the rice, and cook again without
          stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse>
  </Card>
  
  
   
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </center>
    
  </>
  );
}
export default Testing;
