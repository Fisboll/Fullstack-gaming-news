# Gaming News

This website will be acting as a forum where people are able to share different screen shots and questions they have about upcoming games in the console section, they are also able to discuss different specs and thoughts about consoles or just chat about the old memories. Each console have a different section depending what type of console you use where you can create forums and chat with other people about the future and prior games to live with the past or look forward to the future.

This webpage provides a basic look out of a small forum, it still lacks a lot of Java script to be working as a forum with the provided data bases of storing new threads being made inside of these forums. But so far It's just an outlook on what stuff will be as a basic and of course this should also show that people can come here and of course discuss the fact that they are able to just talk about games.

Features
### Existing Features

- __Navigation Bar__
- Featured on all the pages, the full responsive navigation bar includs a forum section, gallery and log in.
- This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

## __Landing Page__

Index HTML is our homepage, you'll be greeted by the Gaming logo which explains what the page is for. Here you have some smaller shortcuts by being able to click the images to the different forums as needed through the corresponding picture that is shown. You can also see our social links and even just move over to our log in page or move over to the Gallery from this page, not much information and quite simple on where to find further information if needed.

![Index](/assets/images/readme/index.png)

## __Gallery__

With the Gallery page, there will be a uploaded ongoing system of different screenshots or just pictures of new upcoming game. It will be add pictures sent in by people and turned into folders inside the Gallery section inside the assets and then added onto the list of pictures already provided to us.

![Gallery](/assets/images/readme/gallery.png)

## __Log-in/Sign-up__

On this page we have the simple login/sign up features for new and old members to be able to log in. Right now the bottoms only brings you back to the Index HTML page since there is no set up or a back end storage for users to be added and no java script added to add functions which will be revealed when added, like turning the login into a User photo instead etc.

![Log in](/assets/images/readme/log-in.png)
![Sign up](/assets/images/readme/sign-up.png)

## __Forums__

- The forum pages are where people can make threads and discuss the future about what they think of games and consoles and future releases.
- This has been added with a different LOGO for each picture, and it is also added feature as to change logo when the background picture can't contain itself anymore from shrinking down past 900px width on different devices so it will change into a more suitable logo to fit that work.
- The forums have a small Div section which you can't do anything with yet. It will be added in future updates when Java script would be allowed as to add a backend feature towards this. The comments/headers there are just for shows right now and will be altered maybe in future.

![Nintendo](/assets/images/readme/nintendo.png)
![Xbox](/assets/images/readme/xbox.png)
![Playstation](/assets/images/readme/playstation.png)
![PC](/assets/images/readme/pc.png)
![VR](/assets/images/readme/oculus.png)

## __Features left to Implement__

- None left through CSS or HTML. It would require Java script to add back ends feedback and log in features.

## __Testing__ 

I've tested the page in many different ways, I've learned more about programming and added script code as well to make a functional selection option for the forums so you'd never have to go back to any former pages to move forward. I've added a Media screen for 1200px and 900px. There were some issues considering some pictures getting to 'big' for this so I even added a 450px section where it changes the photo overall to one of smaller size and easier fits Mobile phones.

One bug I do believe I have is that I learned recently about a Flex box situtation regarding positioning. So far I've just used position abosulte and used margin's to push the text in position, so that means that in **Some** sections on Media screen area it doesn't really make the text appear where it is supposed to be. This haven't been fixed or looked over considering I didn't really know any other features to fix this with.

Image didn't work properly so I've tired changing it, no-repeat works but everything else breaks the image into a Blank white slate.
When I was also doing the forums I had issues with the images not covering the full pages. I worked alot with them and figured out the background-size cover worked

Gallery doesn't seem to have pictures even if the pictures are added correctly in the way. When I use the python3 -m http.server I get all the pictures, but when I uploaded it the pictures all break somehow and doesn't really open up fully.

## Validator Testing 

- HTML
* No errors were returned when passing through the Official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2F8000-fisboll-templatetest-ski00ut7ztb.ws-eu72.gitpod.io%2F)

- CSS
* No errors were returned when passing through the offical [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2F8000-fisboll-templatetest-ski00ut7ztb.ws-eu72.gitpod.io%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

- Accessibility
* There were also very good results from the Light house as three values were green and one above 60%

![Light house](/assets/images/readme/Light%20house%20Scores.png)

## Unfixed Bugs

I haven't added flex boxing to the content, so everything with an Absolute position are most likely gonna break whenever you use the Media screen to shrink and raise the text.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu on the left. Click Pages, Then select Main as Branch.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://fisboll.github.io/Gaming-News/

## Credits

All code have been written by myself, I've gone through the Love project and copied some of that code to my own and altered it to fit the theme of the page. Don't think I can provide an URL to specific codes considering I don't know where to find it.

* All Media as pictures and logos I have found on [google](https://www.google.com/)
* The Icons in the footer were taken from [Font Awesome](https://fontawesome.com/)