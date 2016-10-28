<img src="<%= image%>" class="img-responsive center block" />

<% about.forEach(function(about) { %>
    <h2><%= about %></h2>
<% }) %>
I live in Austin, TX. I am a web developer in training.

<% skills.forEach(function (skills) { %>
    <h2><%= skills %></h2>
        <ul>
            <li> skills </li>
        </ul>
<% }) %>


    <% hobbiesR.forEach(function(hobbiesR) { %>
        <h2><%= hobbiesR %></h2>
    <% }) %>
Hobbies

    <% hobbies.forEach(function(hobbies) { %>
        <ul>
            <li><%= hobbies %></li>
        </ul>
    <% }) %>
"Spending every moment I can with my partner, Using my coding superpowers, Learning any and everything I can possibly absorb, Painting and being creative every chance I get"
