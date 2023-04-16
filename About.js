class about extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=  <div class="container">

  <!-- About Section -->
  
  <div class="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
    <h2 class="w3-text-light-grey">About me</h2>
    <hr style="width:200px" class="w3-opacity">

    <B><p>Thanks for your interest, here
        is a quick story of me and this
        website.
        <br>
        I am Ipsita Das, currently doing my 1st year of MCA in JAIPUR ENGINEERING COLLEGE AND RESEARCH CENTER, Jaipur, Rajasthan. I find Interest in learning skills and studying accordingly. Always open to learn new things and ready to adventure in all circumstances.


        I do my work mainly in C-Language,
        C++ and JAVA. I am familiar with python and currently pursuing my specialisation in Artificial Intelligence and Machine Learning.

        Beside these I know Web Development,
        and basic database as well.
        <hr color="black">
    </p></B>

    <div>
    <button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
      <a href="IPSITA DAS.pdf"Download>
        <i class="fa fa-download"></i> Download Resume</a>
      </button>
    </div>
   
         <br>
         <br>
         <br>
    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
    <p class="w3-wide">HTML/CSS</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:80%"></div>
    </div>
    <p class="w3-wide">JAVA Script</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:30%"></div>
    </div>
    <p class="w3-wide">MY SQL</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:50%"></div>
    </div>
    <p class="w3-wide">C++</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:60%"></div>
    </div>
    <p class="w3-wide">Java</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:50%"></div>
    </div>
    <p class="w3-wide">Python</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style="height:28px;width:30%"></div>
    </div></br>

</div>
 }
};


customElements.define('About', about);