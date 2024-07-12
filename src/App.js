/* import React, { useState, useEffect } from 'react'; */
import './App.css';
import './loading-icon.css'
import image from './image.png'


// Listen for scroll events on the window
window.addEventListener('scroll', function() {
  // Get the scroll direction and amount
  var scrollTop = - window.scrollY * 0.025;
  var scrollTop2 = - window.scrollY * 0.0125+15;

  // Apply the new top value to the .App-body element
  document.querySelector('.bg-stars').style.top = `${scrollTop}vmin`;
document.querySelector('.bg-stars-two').style.top = `${scrollTop}vmin`;

});


// run using docker-compose up
function App() {
  return (
    <div className="App" style={{bottom: 0, left: 0, width: '100%'}}>
      <header className="App-header">
  
      </header>

      <div className="bg-stars"> </div>
       <div className="bg-stars-two"> </div>


      <body className="App-body">

        <h1>Header 1</h1>
          Lorem ipsum dolor sit amet est stet tation. Sadipscing stet erat ut eu amet et vel consetetur sed augue eum vel. Sadipscing at dolor molestie sanctus labore nulla ipsum aliquyam gubergren dolore dolor sanctus sanctus facilisi. Nonumy eirmod takimata at eirmod in feugiat vulputate sit eirmod no adipiscing lorem in diam aliquyam amet accumsan. Et gubergren dolor sea nibh erat diam blandit justo doming aliquyam diam te stet. Ut ullamcorper ipsum nisl et molestie dolor erat dolore dolores no eos duis eros.
          <br /> <br />
          Aliquip amet ipsum eirmod illum consectetuer aliquyam lorem et dolor gubergren no sed ut lorem duis laoreet in. Lorem sea sanctus accumsan lorem laoreet. Est in dolore. No takimata eos eum. Et vero at option labore eu invidunt. Vulputate et tation vulputate sed duo gubergren et kasd takimata at at nonumy eros. Dolore ipsum nulla eos minim vero nonumy dolore.
          <br /> <br />
          Takimata voluptua eros consequat eirmod labore justo labore amet est nihil ea. Voluptua nulla accumsan cum rebum amet sed feugiat exerci dolore no. Clita eos takimata in tempor lorem nonumy aliquyam accusam et sed et. Vero vero accusam euismod. Est ut blandit takimata lobortis rebum takimata et vero ut invidunt consectetuer duo amet ut. Voluptua eu stet no stet sanctus nulla ex iriure est luptatum vero nonummy sed voluptua esse tempor invidunt gubergren. Sed laoreet duo elitr consectetuer duo tincidunt iusto amet lorem odio sit et invidunt dolor nostrud. Ipsum no ea doming ea dolores lorem kasd ut at dolore nulla. Autem et et kasd aliquyam iusto dolore et accumsan eum amet. Elitr eirmod aliquip. Placerat no iriure lorem dolore duo gubergren et. Voluptua odio vulputate no labore sadipscing placerat rebum. Ipsum eos vel et et mazim dolor. Diam augue amet feugait placerat quis ipsum feugiat gubergren. Eirmod gubergren duo amet et eirmod wisi lorem dolores vero clita euismod sit sea et. Dolores erat eos labore ipsum tempor ipsum delenit. Kasd dolor est ipsum elitr possim dolor vero diam lorem odio rebum no sit suscipit.
          <br /> <br />
          Laoreet diam aliquam ipsum at at molestie sed magna justo nulla diam sit sit stet. Liber takimata elitr kasd sit at cum. Ipsum at et justo et facilisi sed dolore. Dolor elit et elitr voluptua diam est velit at. Consequat magna dolor aliquyam lorem. Dolore labore consetetur dolore ea est et sadipscing eirmod illum lorem dolor dolor quis lobortis. Voluptua erat lorem hendrerit sadipscing diam duo adipiscing. Vero id erat et clita eos amet justo voluptua laoreet ea labore eleifend diam eros quis dolore lorem dolore. Dolor labore kasd et amet consequat eum magna ea lorem et eirmod consetetur. Diam te tempor te voluptua eum lorem. Elitr sed eos iriure in facilisi. At consectetuer eos clita sed labore in autem takimata esse consectetuer vel ipsum eirmod diam. Erat nonumy et invidunt et hendrerit invidunt diam at. Justo elitr aliquip et odio ipsum est mazim diam velit kasd voluptua. Doming amet clita aliquyam. Clita dolor laoreet delenit et.
          <br /> <br />
          Ut nonumy odio sed labore dolor amet tempor elitr ea elit sed vero dolor nibh possim lorem ea. At et diam sadipscing invidunt lorem vel eos. Accumsan gubergren eos diam labore in justo ea ut dolores. Diam et labore sea aliquyam ut labore est volutpat dolore nulla ut amet voluptua elitr et clita delenit labore. Lorem ea aliquyam rebum dolore eros nisl sadipscing et labore veniam est nonumy no blandit minim et. Clita aliquam lorem. Eum et sed at eos ut elitr accusam dolore justo labore. Dignissim at qui at voluptua aliquip at diam et molestie ipsum sed delenit elitr takimata ipsum tempor. Praesent duo labore clita vulputate delenit invidunt sed dolor tempor dolor amet. Aliquyam accusam elitr facilisi in no feugait takimata sadipscing sanctus stet magna gubergren. Sit aliquyam ea diam diam ut erat.
          <h1>Header 2</h1>
          Dolor it ullamcorper diam nonumy duo ea in eirmod doming consetetur sanctus aliquyam sanctus ut lorem velit clita. Exerci nonummy hendrerit gubergren feugiat et labore kasd eirmod kasd at. Lorem ad accusam consetetur lorem tempor ex. Nonumy sea et at at duis sanctus adipiscing eos. Facilisis et elitr lorem consetetur placerat sea dolore erat ut lorem sea sed veniam clita labore kasd. Duo kasd vel clita invidunt sea et magna veniam rebum esse euismod gubergren erat. Sea ea lorem nisl nulla clita ipsum tempor consectetuer sea erat ea ea labore et rebum sed.
          <br /> <br />
          Rebum adipiscing erat praesent invidunt consequat at sit magna euismod vel. Lorem duo ut ipsum eirmod elitr amet ea sadipscing et sed ut ipsum. Elitr justo sit elitr labore consetetur sanctus wisi facilisi. Dolor autem cum et invidunt justo gubergren nonummy ipsum. Magna feugiat feugait aliquyam tempor accusam at. Et sadipscing sed amet rebum at dolor justo lorem eirmod no et stet dolore at dolore sanctus ut velit. Volutpat lorem tempor feugiat magna aliquyam vel erat sadipscing et sanctus stet aliquam ut. Delenit labore ipsum lorem vero nihil dolor invidunt sed wisi ex erat dolore lorem nostrud at ut et.
          <br /> <br />
          Minim takimata no aliquyam blandit labore clita erat et et amet. Diam aliquam ea ipsum. Invidunt rebum dolore ut commodo nulla. Autem ut stet. Veniam sed dolor minim sanctus consequat ipsum sea sea eos lorem sed velit. Accusam doming aliquam nihil dolor. Nonumy aliquyam sanctus option dolor iriure sit. Augue sit option duis accusam qui eirmod sadipscing aliquyam lorem sit consetetur ut accumsan sea erat. Eos kasd dolores no dolore sed sit et tempor tempor. Cum diam dolor amet feugiat. Te duis elitr ea et eu cum dolor ea sea consequat sea et et sed facilisis.
          <br /> <br />
          Commodo ut no magna liber commodo et ea amet consequat exerci nonumy. Volutpat erat sed aliquyam sit nam takimata ipsum amet et amet esse sit justo et dolores est nulla. Sit dolores eum nihil nonumy erat sea sadipscing amet ipsum sit accusam velit facilisis voluptua erat kasd.
          <br /> <br />
          Id et tempor tempor ea ut stet ea ex aliquyam elitr. Sit sanctus magna sadipscing ea diam dolore nonumy. Nonumy at placerat sit dolore erat takimata gubergren veniam hendrerit stet quod magna et sed sadipscing nostrud aliquyam vero. Amet et rebum at velit est ea diam eu tempor diam sed tempor aliquip odio elitr rebum et. Facilisi sanctus est eirmod feugait sanctus. Voluptua eos diam qui no gubergren sanctus augue vulputate esse rebum ut amet sed rebum rebum amet. Lorem invidunt nonumy justo clita ea erat et. Et et sed. Nonumy aliquyam consetetur rebum elitr tempor rebum sed erat et sanctus ea est. Aliquyam in sanctus euismod sadipscing gubergren nonumy gubergren voluptua ipsum sea gubergren voluptua ipsum te rebum. Diam takimata sit. Accusam nonumy duis et imperdiet dolore ea. Rebum et lorem sed invidunt amet vero sed gubergren sed dolor est.
          <br /> <br />
            <h1>Header 3</h1>
          Lorem ipsum dolor sit amet est stet tation. Sadipscing stet erat ut eu amet et vel consetetur sed augue eum vel. Sadipscing at dolor molestie sanctus labore nulla ipsum aliquyam gubergren dolore dolor sanctus sanctus facilisi. Nonumy eirmod takimata at eirmod in feugiat vulputate sit eirmod no adipiscing lorem in diam aliquyam amet accumsan. Et gubergren dolor sea nibh erat diam blandit justo doming aliquyam diam te stet. Ut ullamcorper ipsum nisl et molestie dolor erat dolore dolores no eos duis eros.
          <br /> <br />
          Aliquip amet ipsum eirmod illum consectetuer aliquyam lorem et dolor gubergren no sed ut lorem duis laoreet in. Lorem sea sanctus accumsan lorem laoreet. Est in dolore. No takimata eos eum. Et vero at option labore eu invidunt. Vulputate et tation vulputate sed duo gubergren et kasd takimata at at nonumy eros. Dolore ipsum nulla eos minim vero nonumy dolore.
          <br /> <br />
          Takimata voluptua eros consequat eirmod labore justo labore amet est nihil ea. Voluptua nulla accumsan cum rebum amet sed feugiat exerci dolore no. Clita eos takimata in tempor lorem nonumy aliquyam accusam et sed et. Vero vero accusam euismod. Est ut blandit takimata lobortis rebum takimata et vero ut invidunt consectetuer duo amet ut. Voluptua eu stet no stet sanctus nulla ex iriure est luptatum vero nonummy sed voluptua esse tempor invidunt gubergren. Sed laoreet duo elitr consectetuer duo tincidunt iusto amet lorem odio sit et invidunt dolor nostrud. Ipsum no ea doming ea dolores lorem kasd ut at dolore nulla. Autem et et kasd aliquyam iusto dolore et accumsan eum amet. Elitr eirmod aliquip. Placerat no iriure lorem dolore duo gubergren et. Voluptua odio vulputate no labore sadipscing placerat rebum. Ipsum eos vel et et mazim dolor. Diam augue amet feugait placerat quis ipsum feugiat gubergren. Eirmod gubergren duo amet et eirmod wisi lorem dolores vero clita euismod sit sea et. Dolores erat eos labore ipsum tempor ipsum delenit. Kasd dolor est ipsum elitr possim dolor vero diam lorem odio rebum no sit suscipit.
          <br /> <br />
          Laoreet diam aliquam ipsum at at molestie sed magna justo nulla diam sit sit stet. Liber takimata elitr kasd sit at cum. Ipsum at et justo et facilisi sed dolore. Dolor elit et elitr voluptua diam est velit at. Consequat magna dolor aliquyam lorem. Dolore labore consetetur dolore ea est et sadipscing eirmod illum lorem dolor dolor quis lobortis. Voluptua erat lorem hendrerit sadipscing diam duo adipiscing. Vero id erat et clita eos amet justo voluptua laoreet ea labore eleifend diam eros quis dolore lorem dolore. Dolor labore kasd et amet consequat eum magna ea lorem et eirmod consetetur. Diam te tempor te voluptua eum lorem. Elitr sed eos iriure in facilisi. At consectetuer eos clita sed labore in autem takimata esse consectetuer vel ipsum eirmod diam. Erat nonumy et invidunt et hendrerit invidunt diam at. Justo elitr aliquip et odio ipsum est mazim diam velit kasd voluptua. Doming amet clita aliquyam. Clita dolor laoreet delenit et.
          <br /> <br />
          Ut nonumy odio sed labore dolor amet tempor elitr ea elit sed vero dolor nibh possim lorem ea. At et diam sadipscing invidunt lorem vel eos. Accumsan gubergren eos diam labore in justo ea ut dolores. Diam et labore sea aliquyam ut labore est volutpat dolore nulla ut amet voluptua elitr et clita delenit labore. Lorem ea aliquyam rebum dolore eros nisl sadipscing et labore veniam est nonumy no blandit minim et. Clita aliquam lorem. Eum et sed at eos ut elitr accusam dolore justo labore. Dignissim at qui at voluptua aliquip at diam et molestie ipsum sed delenit elitr takimata ipsum tempor. Praesent duo labore clita vulputate delenit invidunt sed dolor tempor dolor amet. Aliquyam accusam elitr facilisi in no feugait takimata sadipscing sanctus stet magna gubergren. Sit aliquyam ea diam diam ut erat.
          <h1>Header 4</h1>
          Dolor it ullamcorper diam nonumy duo ea in eirmod doming consetetur sanctus aliquyam sanctus ut lorem velit clita. Exerci nonummy hendrerit gubergren feugiat et labore kasd eirmod kasd at. Lorem ad accusam consetetur lorem tempor ex. Nonumy sea et at at duis sanctus adipiscing eos. Facilisis et elitr lorem consetetur placerat sea dolore erat ut lorem sea sed veniam clita labore kasd. Duo kasd vel clita invidunt sea et magna veniam rebum esse euismod gubergren erat. Sea ea lorem nisl nulla clita ipsum tempor consectetuer sea erat ea ea labore et rebum sed.
          <br /> <br />
          Rebum adipiscing erat praesent invidunt consequat at sit magna euismod vel. Lorem duo ut ipsum eirmod elitr amet ea sadipscing et sed ut ipsum. Elitr justo sit elitr labore consetetur sanctus wisi facilisi. Dolor autem cum et invidunt justo gubergren nonummy ipsum. Magna feugiat feugait aliquyam tempor accusam at. Et sadipscing sed amet rebum at dolor justo lorem eirmod no et stet dolore at dolore sanctus ut velit. Volutpat lorem tempor feugiat magna aliquyam vel erat sadipscing et sanctus stet aliquam ut. Delenit labore ipsum lorem vero nihil dolor invidunt sed wisi ex erat dolore lorem nostrud at ut et.
          <br /> <br />
          Minim takimata no aliquyam blandit labore clita erat et et amet. Diam aliquam ea ipsum. Invidunt rebum dolore ut commodo nulla. Autem ut stet. Veniam sed dolor minim sanctus consequat ipsum sea sea eos lorem sed velit. Accusam doming aliquam nihil dolor. Nonumy aliquyam sanctus option dolor iriure sit. Augue sit option duis accusam qui eirmod sadipscing aliquyam lorem sit consetetur ut accumsan sea erat. Eos kasd dolores no dolore sed sit et tempor tempor. Cum diam dolor amet feugiat. Te duis elitr ea et eu cum dolor ea sea consequat sea et et sed facilisis.
          <br /> <br />
          Commodo ut no magna liber commodo et ea amet consequat exerci nonumy. Volutpat erat sed aliquyam sit nam takimata ipsum amet et amet esse sit justo et dolores est nulla. Sit dolores eum nihil nonumy erat sea sadipscing amet ipsum sit accusam velit facilisis voluptua erat kasd.
          <br /> <br />
          Id et tempor tempor ea ut stet ea ex aliquyam elitr. Sit sanctus magna sadipscing ea diam dolore nonumy. Nonumy at placerat sit dolore erat takimata gubergren veniam hendrerit stet quod magna et sed sadipscing nostrud aliquyam vero. Amet et rebum at velit est ea diam eu tempor diam sed tempor aliquip odio elitr rebum et. Facilisi sanctus est eirmod feugait sanctus. Voluptua eos diam qui no gubergren sanctus augue vulputate esse rebum ut amet sed rebum rebum amet. Lorem invidunt nonumy justo clita ea erat et. Et et sed. Nonumy aliquyam consetetur rebum elitr tempor rebum sed erat et sanctus ea est. Aliquyam in sanctus euismod sadipscing gubergren nonumy gubergren voluptua ipsum sea gubergren voluptua ipsum te rebum. Diam takimata sit. Accusam nonumy duis et imperdiet dolore ea. Rebum et lorem sed invidunt amet vero sed gubergren sed dolor est.
          <br /> <br />
        
    </body>
    
    </div>
  );
}

/*
function createMarkup(text) {
  return { __html: text };
}
  */

export default App;
