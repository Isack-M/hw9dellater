"use strict";

function BlogR() {
    return (
        <div className="blog">
            <h2>Blog</h2>

            <h3>Proposed Database Table</h3>
            <p>My proposed database table will be named "exotic_fish", it will store profiles that are submitted by users and include:</p>
            <ul>
                <li>exotic_fish_id: Auto-increment primary key</li>
                <li>fishspecies_name: unique name (varchar)</li>
                <li>image: url pointing to an image (varchar)</li>
                <li>species_population: nullable non-character field (integer)</li>
                <li>depth_found: nullable non-character field (integer)</li>
                <li>habitat: additional field (varchar)</li>
                <li>web_user_id: foreign key to web_user (integer)</li>
            </ul>

            <h3>Server page</h3>
            <p>If you'd like to see a server side page with a picture of a fish click: <a href="hello" target="_blank" className="serverLink">here</a></p>
            
            <h3>My Database Experience</h3>
            <p>I have no database experience as of now, but I hope to learn as we progress with the homeworks and labs. I will also look into a database elective for next semester.</p>

            <h3>My Web Development Experience</h3>
            <p>My web development experience comes from 2 projects I made my freshman and junior year. My junior year project was the better one as I worked with Python, LangChain, and Google Gemini API to create an online AI tennis coach.</p>

            <h3>HW 1 Home Page</h3>
            <p>The most challenging and valuable part of this homework had to be the external style sheet. Choosing the right color scheme and overall styling of the webpage was a bit tedious. However, the external style sheet also made the HTML much cleaner and easier to work on.</p>

            <h3>HW 2 Server Page</h3>
            <p>Setting up the router and react cgf was the easiest part of the lab. Merging, transfering and updating the css was probably the most tedious part of this assigment. It took me a while to transfer the files from part 8 of the lab because of some error that kept occuring.</p>
        
            <h3>HW 3 Database</h3>
            <p>This homework was pretty easy. It was tedious to fill up 10 data cells. I had to keep tabbing in an out to get the image address for each entry. With the lab practice making the different fields in web_user, I found it a lot easier to make all my fields in my exotic_fish table.</p>

            <h3>HW 4 JS Components</h3>
            <p>The hardest part of this homework had to be coming up with unique properties. I didn't want to chose any from my "other table" because people will be seeing those when updating the data base. At first I was just going to stick with nickname and market value but it seemed too similar to the JS components lab. I came up with age so the user can see a picture of the fish depending on their age. The easy part of this homework was making the JS components because of our work in the previous lab, all I had to do was change some names and add the onchange event with the age property. </p>       
        
            <h3>HW 5 Web APIs</h3>
            <p>For this module the most valuable concept I learned was using Web APIs to retrieve data from our database and displaying it on our webapp. The easiest part of this module was editing the sample code to fit my personal webapp. It was a matter of changing some names and updating the SQL select statement. There weren't any major difficulties, it just took me some time to find out how to produce all 6 web API database errors.</p>
            <p>Click <a target="_blank" href="docs/WebAPI_HW.pdf">here</a> to see my Web API error document.</p>
            <p>To see my <strong>List Users API</strong> open up in a new tab, click <a href="webUser/getAll" target="_blank">here</a>.</p>
            <p>To see my <strong>List Exotic Fish API</strong> open up in a new tab, click <a href="exoticFish/getAll" target="_blank">here</a>.</p>

            <h3>HW 6 ShowData</h3>
            <p>There really wasn't anything particularly hard this week. Most of the sample code provided did all the work but I did have to go through the code in order to merge both filter and sort logic into a single table jsx file. I also had to revise some of the data in my database because I just had some filler images for users and fishes. The most valuable takeaway from this module was learning to make ajax calls to get data from both tables and using the data on our website.</p>

            <h3>HW 7 Logon</h3>
            <p>Hardest part of this project was realizing I can use DbMods from the lab as a helper class to handle the db queries. Setting up login, logoff and getProfile in WebUserController was the easiest part. I found it really useful to add getLogon in db mods by reusing the existing SQL query structure and swapping the WHERE clause.</p>

            <h3>HW 8 Insert</h3>
            <p>I'd say incorperating all the sample code was the hardest part. It got a bit messy trying to organize all the files but having them set up from the sample code and previous lab helped a lot. Displaying the data was probably the easiest part because I set up everything in the previous lab. The most interesting thing from this module was learning how dropdown menus can get info from the db.</p>

            <h3>HW 9 Update</h3>
            <p>This module was fairly simple. The hardest part was probably making sure that all the ajax calls were properly loading because I had some things named differently in my lab 9 code. The easiest part was implementing the RequestMappings for update and getById thanks to the work we did in Lab 9. </p>
        </div>
    );
}