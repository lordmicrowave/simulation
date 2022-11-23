import * as React from 'react';

//Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

//CSS
import '../Styling/fadeout.css';
import '../Styling/blurrytext.css';

//Images
import clouds from '../Assets/clouds-seamless.jpg';
import compbanner from '../Assets/compbanner.png';
import compbannerflip from '../Assets/compbannerflip.png';
import babychacha from '../Assets/dancing-baby.gif';



export default function Types() {
  return (
    <div className="body-background">
    <Box sx={{ width: '100%', maxWidth: 1200 }}>
      <h3 gutterBottom>
        <img class="compbanner" src={compbanner} alt="computer"/>
          WHAT THE INTERNET LOOKED LIKE IN 2000
        <img class="compbanner-flip" src={compbannerflip} alt="computer-flipped"/>
      </h3>

      <h4 variant="subtitle1" gutterBottom>
        BY DILLON WALLACE
      </h4>

      <i class="italics" gutterBottom>
      Beep-boop-bop-beep-eeeeekkkkrrr-ding-dang-dong-pshhhhhhhhhhhhhhkkkkhhhhhkkkkkhhhh. 
      </i>
      
      <div class='at-container'>
        <div class='at-item'>
          <p class="body-text">
            If you tried getting on the internet around the year 2000, that was the 
            beautiful connection tone of 56k dail-up you were privy to hearing. It was 
            music to the ears for web goers before the new millennium. it was also 
            painstakingly slow with a terrible user interface and horrid design. 

            But in 2000, the internet was young. Maybe not in its infancy but still in 
            its toddler years, mastering the crawl and attempting to walk. So let’s 
            take a trip back to the days where boy bands were swooning the hearts of 
            teenie boppers everywhere, where cargo pants were a closet staple and 
            oversized shirts blaring huge clothing brand logos were our fashion flags 
            as we loitered at the local malls. Let’s revisit the World Wide Web as it was in 2000.
          </p>
        </div>
      </div>
      
      <div class="marquee">
        <div>
          <span>Hey. Focus. Keep reading...</span>
          <span>Hey. Focus. Keep reading...</span>         
        </div>
      </div>
      

      <Box
      sx={{
        width: 300,
        height: 100,
        backgroundColor: 'primary.white',
        '&:hover': {
          backgroundColor: 'primary.white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    

      <p class="body-text">
        What’s a Google?

        In 1998, a couple of Stanford students decided to create a search engine 
        company for this relatively new thing called, the Internet (back when it 
        was still capitalized). By 1999, the Google Beta was out for users to 
        “Search the web using Google.” Maybe those two Ph.D. students knew the 
        extent of what they had created. Maybe not. But by 2000, Google was just 
        a baby and people everywhere were asking “what’s a Google?” Oh, how far 
        we’ve come ...

        Dancing baby

        But, speaking of babies … do you remember the dancing internet baby? Also 
        known as Baby-Cha-Cha, this 3D rendered and diaper cladded dancing baby
        Also 
        known as Baby-Cha-Cha, this 3D rendered and diaper cladded dancing baby
        known as Baby-Cha-Cha also 
      <div id="blurout"><p>known as Baby-Cha-Cha, this 3D rendered and diaper cladded dancing...
      </p>
      </div>
      
      <img class="baby"  src={babychacha} alt="dancingbaby"/>
      became one of the internet’s first viral videos. Before there was Youtube, 
      before memes and GIFs, you had that weird little dancing baby.
      </p>

      <p class="body-text">
        <div id="blurout">
      <p>If you were going to surf the web back in 2000, you needed an email 
      address. And chances are you were one of those people who had a ridiculous 
      address like C00LDuD3@yahoo.com or Hawttstuffz@hotmail.com. It’s okay, you 
      weren’t the only one who chose a stupid moniker. Why do you think you had 
      to put a number 16 on the end of it? Because apparently there were 15 other 
      people who had the same dumb name idea you did.</p>
      </div>
      <div class='at-container'>
	    <div class='at-item' >AOL instant messenger (AIM)
        For a lot of kids, typing or computer class at school is where they learned 
        proficient keyboard skills. For teenagers in the late 90s/early 2000s, 
        Instant Messenger is where you mastered your keyboard skills. Having to 
        jumble between 6 open IM conversations made your fingers learn the keys 
        real quick. It was like texting your friends before texting was even a thing. 
        Also if your sleek smartphone was replaced by a giant desktop computer.
        </div>
      </div>
      </p>
      
      <div class="marquee">
        <div>
          <span>What's a Google?</span>
          <span>What's a Google?</span>
          
        </div>
      </div>

      <Box
      sx={{
        width: 300,
        height: 200,
        backgroundColor: 'primary.white',
        '&:hover': {
          backgroundColor: 'primary.white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />

      <p class="body-text">
      Terrible websites (flash players and sprites)
        If you were to visit your favorite website back in the early internet 
        days, you’d find that most of the web pages were filled with scrunched 
        links, pixelated images and terrible search bars. 
        <p id="blurout">They looked more like 
        someth - - -</p>       
      </p>

      
      
    </Box>

    
    </div>
  );
}
