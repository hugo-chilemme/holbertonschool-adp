const screen = {

    version: undefined,

    update: {

        // clock: (h, m, s) => d.querySelector('#clock').innerHTML = `${h}:${m}<span>${s}</span>`,

        weather: (temperature) => d.querySelector('.weather value').innerText = temperature,

        version: (version, link) => d.querySelector('version-text').innerText = version,

        commit: {

            element: (commit) => {
                d.querySelector('.current-comitter h1').style.opacity = 0;
                setTimeout(() => {
                    let title = atob(commit.TITLE);
                    const is_merge = title.includes('Merge pull request');
                    if (is_merge)
                        title = title.split('\n')[2].trim();



                    d.querySelector('.current-comitter h1').style.opacity = 1;
                    d.querySelector('.current-comitter').classList.remove('unshow');
                    d.querySelector('.current-comitter h1').innerText = title;
                    d.querySelector('.current-comitter .about-committer author').innerText = commit.USER.Pseudo.split(' ')[0]
                    d.querySelector('.current-comitter .about-committer img').src = commit.USER.Avatar;
                    d.querySelector('.current-comitter repo').innerText = commit.REPOSITORY;


                    const refreshDate = () => {
                        if (last_commit === commit.ID)
                        {
                            const date = new Date( new Date(commit.DATETIME).getTime() - new Date().getTime() );
                            ago = { value: date.getHours(), text: "hour" };
                            if (date.getHours() === 0) 
                            {
                                ago = { value: date.getMinutes(), text: "minute" };
                                if (date.getMinutes() === 0) 
                                {
                                    ago = { value: date.getSeconds(), text: "second" };
                                }
                            }
                            
    
                            d.querySelector('.current-comitter date').innerText = ago.value + " " + addPlural(ago.value, ago.text) + " ago";  
                            setTimeout(() => refreshDate(), 500)
                        }
                    }
                    refreshDate()

                  
                }, 500)
            },

            count: (xp) => {
                
                const exp_div = d.querySelector('.current-comitter .experience-comitter span');
                const exp_ico = d.querySelector('.current-comitter .experience-comitter span #icon');

                d.querySelector('.current-comitter .experience-comitter span value').innerText = xp;

                if ( xp > 0 )
                {
                    exp_div.style.background = 'var(--success-commit-color)';
                    exp_ico.className = "bx bx-chevron-up";
                }
                else if ( xp < 0 )
                {
                    exp_div.style.background = 'var(--failure-commit-color)';
                    exp_ico.className = "bx bx-chevron-down";
                }
                else
                {
                    exp_div.style.background = 'var(--card-item-background-color)';
                    exp_ico.className = "bx bx-chevron-up";
                }
            }

            
        },

        scoreboard: (scoreboard) => {

            scoreboard.sort((a, b) => b.XP - a.XP);
            screen.scoreboard = scoreboard
            const sb = d.querySelector('.scoreboard');
           
            const items = sb.querySelectorAll('.item');
            for (let i = 0; i < (scoreboard.length < 6 ? scoreboard.length : 6); i++)
            {
                const user = scoreboard[i];
                if (items[i])
                {
                    items[i].querySelector('xp').innerText = user.XP;
                    if (items[i].getAttribute('scoreboard-id') !== user.Login)
                    {
                        items[i].querySelector('img').src = user.Avatar;
                        items[i].querySelector('h3').innerText = user.Pseudo.split(' ')[0];
                        items[i].querySelector('h4').innerText = ' Cohort ' + user.Session;
                        items[i].setAttribute('scoreboard-id', user.Login);
                    }
                    continue;
                }
                let html = "";
                html += ' <div class="item" scoreboard-id="'+ user.Login +'"> ';
                html += '    <div class="rank"> </div>';
                html += '    <div class="picture"> <img src="' + user.Avatar + '"> </div> ';
                html += '    <div class="about"> <h3> ' + user.Pseudo.split(' ')[0] + '</h3>  <h4>Cohort ' + user.Session + '</h4> </div> ';
                html += '    <div class="right">  <span> <i class="bx bx-chevron-up" ></i> <xp>' + user.XP + '</xp></span> </div> ';
                html += ' </div> ';
                sb.innerHTML += html;
            }
        }

    },

    

}
