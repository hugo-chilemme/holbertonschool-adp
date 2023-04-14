    let last_commit;
    const commits = {

        sentToDisplay (commit) {
            if (!last_commit || last_commit != commit.ID)
            {

                const xpTotal = commit.XP;
                screen.update.commit.count(0);
                screen.update.commit.element(commit)

                function updateExperienceCount() {
                    let xpCount = 0;

                    const increment = xpTotal > 0 ? 1 : -1;

                    function updateScreen() {
                        screen.update.commit.count(xpCount);
                    }

                    function animate() {
                        xpCount += increment;
                        updateScreen();
                        if (xpCount !== xpTotal) {
                            setTimeout(animate, 3500 / xpTotal);
                        }
                    }

                    setTimeout(() => animate(), 1000)
                }
                if (xpTotal != 0)
                    updateExperienceCount()

                if (!commit.DISPLAYED)
                {
                    const sentToRead = new ApiController('commits/displayed/'+ commit.ID);
                    sentToRead.sendRequest();

                }
                
                last_commit = commit.ID;

            }
            return;
        }

    }

