"use strict";

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
(function(){

    function DisplayHomePage(){
        console.log("Display Home Page called");
        let WelcomeMessageHeading1=document.getElementById("WelcomeMessage");
        let message = document.createElement("h2");
        message.innerHTML= "Explore our project in project link. <br>" +
            "To learn about us click on about page. <br>" +
            "For services explore service page. <br>";

        WelcomeMessageHeading1.innerHTML="Welcome to 3developer";
        let WelcomeDiv= document.getElementById("Welcome");
        WelcomeDiv.appendChild(message);
        // let AboutUsButton = document.getElementById("AboutUsBtn");
        // AboutUsButton.addEventListener("click", function (){
        //     //console.log("About Us Button Clicked");
        //     location.href = "about.html";

        // })
    }

    // STEP 3
    // let MainContent = document.getElementsByTagName("main")[0];
    // let MainParagraph = document.createElement("p");

    // STEP 5
    //MainParagraph.setAttribute("id", "MainParagraph");
    //MainParagraph.setAttribute("class", "mt-3");
    //MainParagraph.textContent = "This is the main Paragraph!";

    // let FirstString = "This is";
    // let SecondString = `${FirstString} the Main Paragraph.`;
    // MainParagraph.textContent = SecondString;

    //STEP 6
    // MainContent.appendChild(MainParagraph);
    // let Article = document.createElement("article");
    // let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph</p>`;
    // Article.setAttribute("class", "container");
    // Article.innerHTML = ArticleParagraph;
    // // DocumentBody.appendChild(Article);
    // document.body.appendChild(Article);

    function DisplayProductsPage(){
        console.log("Display Products Page called");
    }

    function DisplayServicesPage(){
        console.log("Display Services Page called");

    }

    function DisplayAboutUsPage(){
        console.log("Display About Page called");


    }
    function DisplayContactUsPage(){
        console.log("Display Contact Page called");
        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function (event ){
            if(subscribeCheckbox.checked){
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);

                if(contact.serialize()){
                    let key = contact.FullName.substring(0,1) + Date.now();
                    localStorage.setItem(key, contact.serialize());

                }

            }
        });

    }

    function DisplayContactListPage(){
        console.log("Display Contact List Page called");

    }
    function DisplaynavbarBottom(){
            let currentDate = new Date();
            let year = currentDate.getFullYear();
            let navbar = document.createElement("nav");
            navbar.setAttribute("class", "navbar justify-content-center fixed-bottom navbar-light bg-light");
            let copyright = document.createElement("div");
            copyright.setAttribute("class", "navbar-text ");
            copyright.innerHTML = "Copyright &copy; " + year;
            navbar.appendChild(copyright);
            document.body.appendChild(navbar);
        }
    function CreateAboutUsPage() {
        let container = document.createElement("div");
        container.classList.add("container", "justify-content-center", "ms-auto");

        let teamDiv = document.createElement("div");
        teamDiv.id = "team";
        teamDiv.classList.add("justify-content-center", "d-flex");

        let teamMembers = [
            {
                name: "Sanya Singhal",
                email: "sanya.singhal@dcmail.ca",
                phone: "437-286-1739",
                image: "./images/dp_sanya.jpeg"
            },
            {
                name: "Prerakkumar Patel",
                email: "prerakkumar.patel@dcmail.ca",
                phone: "905-922-8135",
                image: "./images/dp_prerak.jpeg"
            },
            {
                name: "Zeel Sutariya",
                email: "zeel.sutariya@dcmail.ca",
                phone: "905-922-8577",
                image: "./images/dp_zeel.jpeg"
            }
        ];

        teamMembers.forEach(function(member) {
            let memberDiv = document.createElement("div");
            memberDiv.classList.add("m-3", "d-inline-block");

            let memberImg = document.createElement("img");
            memberImg.src = member.image;
            memberImg.width = "304";
            memberImg.height = "228";
            memberImg.alt = member.name + "'s DP";
            memberDiv.appendChild(memberImg);

            let memberInfo = document.createElement("p");
            memberInfo.classList.add("text-lg-center");
            memberInfo.innerHTML = member.name + "<br/>" + member.email + "<br/>" + member.phone;
            memberDiv.appendChild(memberInfo);

            teamDiv.appendChild(memberDiv);
        });

        container.appendChild(teamDiv);

        document.body.appendChild(container);
    }

    function CreateServicesPage() {
        let container = document.createElement("div");
        container.classList.add("container", "justify-content-center", "ms-auto");


        let teamDiv = document.createElement("div");
        teamDiv.id = "Service";
        teamDiv.classList.add("justify-content-center", "d-flex");

        let teamMembers = [
            {
                description: "We provide you a unique website design that is ideal for your personal or company website.",
                image: "./images/services_web_design.jpg"
            },
            {
                description: "we provide end-to-end organization, conceptualization, design, optimization, and maintenance of your mobile app project.",
                image: "./images/services_app_development.png"
            },
            {
                description: "We are capable of handling the design, creation, and release of a video game.",
                image: "./images/services_game_development.jpeg"
            }
        ];

        teamMembers.forEach(function(member){
            let memberDiv = document.createElement("div");
            memberDiv.classList.add("m-3", "d-inline-block", "text-center");

            let memberImg = document.createElement("img");
            memberImg.src = member.image;
            memberImg.width = "330";
            memberImg.height = "230";
            memberDiv.appendChild(memberImg);

            let memberInfo = document.createElement("p");
            memberInfo.classList.add("text-lg-center");
            memberInfo.innerHTML = member.description;
            memberDiv.appendChild(memberInfo);

            teamDiv.appendChild(memberDiv);
        });

        container.appendChild(teamDiv);

        document.body.appendChild(container);
    }

    function CreateProjectsPage() {
        let container = document.createElement("div");
        container.classList.add("container", "justify-content-center", "ms-auto");


        let teamDiv = document.createElement("div");
        teamDiv.id = "Projects";
        teamDiv.classList.add("justify-content-center", "d-flex");

        let teamMembers = [
            {
                description: "With this project, we wanted to show how to use a database with a website. including the login and registration features. Additionally, users of this site can upload photos",
                image: "./images/project1.jpeg"
            },
            {
                description: "This software was created for the pizza shop so they could manage all of their online and in-store orders in one place.",
                image: "./images/project2.jpeg"
            },
            {
                description: "This was a project we created for managers so they could have access to all the information they require on their staff.",
                image: "./images/project3.jpeg"
            }
        ];

        teamMembers.forEach(function(member){
            let memberDiv = document.createElement("div");
            memberDiv.classList.add("m-3", "d-inline-block", "text-center");

            let memberImg = document.createElement("img");
            memberImg.src = member.image;
            memberImg.width = "370";
            memberImg.height = "215";
            memberDiv.appendChild(memberImg);

            let memberInfo = document.createElement("p");
            memberInfo.classList.add("text-lg-center");
            memberInfo.innerHTML = member.description;
            memberDiv.appendChild(memberInfo);

            teamDiv.appendChild(memberDiv);
        });

        container.appendChild(teamDiv);

        document.body.appendChild(container);
    }

    function ChangeNavbarLinkText() {
        // Get the link element by its class name

            // Get the link element by its class name
            let link = document.getElementsByClassName("nav-link")[1];
            // Change the text of the link
            link.innerHTML = '<i class="fa-brands fa-product-hunt"></i> Project';


    }

    function Start()
    {
        console.log("Application Started!")


        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
            case "Product":
                DisplayProductsPage();
                CreateProjectsPage();
                break;
            case "About":
                DisplayAboutUsPage();
                CreateAboutUsPage();
                break;
            case "Services":
                DisplayServicesPage();
                CreateServicesPage();
                break;
            case "Contact Us":
                DisplayContactUsPage();
                break;
            case "Contact List":
                DisplayContactListPage();
                break;
        }



    }
    window.addEventListener("load", Start);
    window.addEventListener("load", DisplaynavbarBottom);
    window.addEventListener("load", ChangeNavbarLinkText);

})();




