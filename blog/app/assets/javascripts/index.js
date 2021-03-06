//Javascript used on the index page.

//Quotes functionality	
var quotesArr = ["\"I remember the time I was kidnapped and they sent a piece of my finger to my father. He said he wanted more proof.\"",
				 "\"Sometimes the road less traveled is less traveled for a reason.\"",
				 "\"I'm against picketing, but I don't know how to show it.\"",
				 "\"What's another word for Thesaurus?\"",
				 "\"I like to reminisce with people I don't know.\"",
				 "\"For a moment, nothing happened. Then, after a second or so, nothing continued to happen.\"",
				 "\"In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.\"",
				 "\"I refuse to answer that question on the grounds that I don't know the answer.\"",
				 "\"I don't exactly know what I mean by that, but I mean it.\"",
				 "\"Although the villagers had forgotten the ritual and lost the original black box, they still remembered to use stones.\"",
				 "\"I'm so great even I get tongue-tied talking to myself.\"",
				 "\"I teleported home last night with Ron and Sid and Meg. Ron stole Meggy's heart away and I got Sidney's leg.\"",
				 "\"The universe is a big place, perhaps the biggest.\"",
				 "\"The hotel shop only had two decent books, and I'd written both of them.\"",
				 "\"I used to play sports. Then I realized you can buy trophies. Now I am good at everything.\"",
				 "\"From the moment I picked up your book until I put it down, I was convulsed with laughter. Some day I intend reading it.\"",
				 "\"I intend to live forever, or die trying.\"",
				 "\"Leave the gun. Take the cannoli.\"",
				 "\"It's not like my mother is a maniac or a raving thing. She just goes a little mad sometimes. We all go a little mad sometimes. Haven't you?\"",
				 "\"Get busy living, or get busy dying.\"",
				 "\"You don't have to burn books to destroy a culture. Just get people to stop reading them.\"",
				 "\"He knew the risks, he didn't have to be there. It rains... you get wet.\"",
				 "\"Danny isn't here, Mrs. Torrance.\"",
				 "\"Some places are like people: some shine and some don't.\"",
				 "\"Men are more moral than they think and far more immoral than they can imagine.\"",
				 "\"Jimmy was the kind of guy that rooted for bad guys in the movies.\"",
				 "\"But you gotta be a, a hero. You want to be a champion. Well, let me tell you. People don't want a champion. They want to eat cheeseburgers, play the lotto and watch television.\"",
				 "\"A man can convince anyone he's somebody else, but never himself.\"",
				 "\"It was Keyser Soze, Agent Kujan. I mean the Devil himself. How do you shoot the Devil in the back? What if you miss?\"",
				 "\"Memory can change the shape of a room; it can change the color of a car. And memories can be distorted. They're just an interpretation, they're not a record, and they're irrelevant if you have the facts.\"",
				 "\"It's a great thing when you realize you still have the ability to surprise yourself.\"",
				 "\"Daisy, Daisy, give me your answer do. I'm half crazy all for the love of you. It won't be a stylish marriage, I can't afford a carriage. But you'll look sweet upon the seat of a bicycle built for two.\"",
				 "\"I'm gonna give you a little somethin' you can't take off.\"",
				 "\"When you step on the brakes your life is in your foot's hands.\"",
				 "\"One can never know for sure what a deserted area looks like.\"",
				 "\"Fighting for peace is like screwing for virginity.\"",
				 "\"Knowledge is a strong stream of water turned on us through a hose. It disturbs our roots.\"",
				 "\"The secret of getting ahead is getting started.\"",
				 "\"It is better to keep your mouth closed and let people think you are a fool than to open it and remove all doubt.\"",
				 "\"The lack of money is the root of all evil.\"",
				 "\"The first of April is the day we remember what we are the other 364 days of the year.\"",
				 "\"Buy land, they're not making it anymore.\"",
				 "\"I have been complimented many times and they always embarrass me; I always feel that they have not said enough.\"",
				 "\"All generalizations are false, including this one.\"",
				 "\"Giving up smoking is the easiest thing in the world. I know because I've done it thousands of times.\"",
				 "\"An original idea. That can't be too hard. The library must be full of them.\""];
				 
var peopleArr = ["Rodney Dangerfield",
				 "Jerry Seinfeld",
				 "Mitch Hedberg",
				 "Steven Wright",
				 "Steven Wright",
				 "Douglas Adams",
				 "Douglas Adams",
				 "Douglas Adams",
				 "J.D. Salinger",
				 "Shirley Jackson",
				 "Douglas Adams",
				 "Douglas Adams",
				 "Kurt Vonnegut",
				 "Douglas Adams",
				 "Demetri Martin",
				 "Groucho Marx",
				 "Groucho Marx",
				 "Peter Clemenza",
				 "Norman Bates",
				 "Andy Dufresne",
				 "Ray Bradbury",
				 "Neil McCauley",
				 "Tony",
				 "Dick Halloran",
				 "Sigmund Freud",
				 "Henry Hill",
				 "William Somerset",
				 "Verbal Kint",
				 "Verbal Kint",
				 "Leonard Shelby",
				 "Lester Burnham",
				 "HAL 9000",
				 "Lt. Aldo Raine",
				 "George Carlin",
				 "George Carlin",
				 "George Carlin",
				 "O. Henry",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Mark Twain",
				 "Stephen Fry"];

var maxIndex = quotesArr.length - 1;
	
var quoteElement = document.getElementById("quote");
var personElement = document.getElementById("person");
var currentIndex = Math.floor(Math.random() * (maxIndex + 1));

setQuote();

function nextQuote() {
	currentIndex += 1;
	if (currentIndex >= quotesArr.length)
		currentIndex = 0;
		
	setQuote();
	window.scrollTo(0,document.body.scrollHeight);
}

function setQuote() {
	quoteElement.innerHTML = quotesArr[currentIndex];
	personElement.innerHTML = "-<i>" + peopleArr[currentIndex] + "</i>";
}

//Daily Garfield strip processing.
var garfieldImg = document.getElementById("todaysGarfieldStrip");
var todaysDate = new Date();
var month = todaysDate.getMonth() + 1; //Plus 1 because getMonth returns 0-11
var day = todaysDate.getDate();
var year = todaysDate.getFullYear();
var dayFiller = "0";
var monthFiller = "0";
	
if (day > 9)
	dayFiller = "";
if (month > 9)
	monthFiller = "";
	
garfieldImg.src = "https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/" + year + "/" + year + "-" + monthFiller + month + "-" + dayFiller + day + ".gif";
	
document.getElementById("garfieldText").innerText = "Daily Garfield Strip: " + monthFiller + month + "-" + dayFiller + day + "-" + year;

//Code below stolen from here: http://stackoverflow.com/questions/5270227/how-to-hide-show-more-text-within-a-certain-length-like-youtube#comment14270612_5270351
var collapsedSize = '80px';
$('.item').each(function() {
    var h = this.scrollHeight;
    var div = $(this);
	var toggleButton = $(this).parent().find('.custom-button');
	toggleButton.text('Read more');
	
    if (h > 30) {
        div.css('height', collapsedSize);
			
        toggleButton.click(function(e) {
            e.stopPropagation();

            if (toggleButton.text() != 'Collapse') {
                toggleButton.text('Collapse');
                div.animate({
                    'height': h
                });

            } else {
                div.animate({
                    'height': collapsedSize
                });
                toggleButton.text('Read more');
            }

        });
    }

});