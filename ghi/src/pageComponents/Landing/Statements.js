function getRandomIntMax(max) {
    return Math.floor(Math.random() * max)
}

const loadStatement = () => {
    return oneLiners[getRandomIntMax(oneLiners.length - 1)]
}

const oneLiners = [
    ["Lord, forgive my root sins and my fruit sins **"],
    ["Repent your root sins, resist your fruit sins **"],
    ["Love is an action word **"],
    ["In all things, lead with love **"],
    ["Personality and Process must submit to Purpose **"],
    ["Believe in Miracles - Work Harder - Persevere Always"],
    ["Learn to compete - Learn to win - Learn to win when expected - Learn to be a champion"],
    ["Keys to Success: Rebrand, Erosion, Core Values, Structure, Credibility"],
    ["Know what you STAND for so you don't FALL for just anything **"],
    ["Satan's s Tactics: Discourage - Distract - Deceive"],
    ["Jesus came to: Preach and Reach, Seek and Save, take Victims to Victory"],
    ["Keep simple things simple",<p></p>, <p>-Lead With Love</p>, <p>-Forgive Always</p>, "-Be Good. Be Kind **"],
    ["Keep simple things simple", <p></p>, <p>Obedience is Belief</p>, <p>Disobedience is Unbelief</p>],
    ["Keep simple things simple", <p></p>, <p>Don't try to know or apply scripture beyond what you understand</p>],
    ["Keep simple things simple", <p></p>, <p>Do Less - Pray More</p>, <p>Do Less - Faith More</p>, <p>Do Less - Trust More</p>, <p>Hate Less - Forgive More</p>, <p>Demand Less - Love More **</p>],
    ["Keep simple things simple", <p></p>, <p>Get the fish on the hook before you try to clean it.</p>],
    ["Will you be victim or victorious. Can't be both"],
    ["Never judge your <span className="yellow">STATUS" (who you are defined by God: e.g.-righteous, holy)", " by your <span className="yellow">STATE" (how you feel: e.g.-depressed, angry, worthless)"],
    ["Everyone is useful, No one is necessary... except Jesus."],
    ["Rules without Relationship = Rebellion",<p></p>, "Rules with relationship = Respect **"],
    ["Praised behavior will bring about Repeated behavior"],
    ["When you are cut, what do you bleed? **"],
    ["Mercy is not giving to someone what they deserve. <u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.">Grace</u> is giving to someone what they do not deserve"],
    ["To not forgive yourself is to waste the life and death of Jesus Christ **"],
    ["Never choose preference over obedience"],
    ["Use your scars to guide your path to the stars **"],
    ["Let God turn your mistakes into miracles"],
    ["I only want to talk when people want to listen **"],
    ["Cure For Doubt: confess doubt, study the evidence for <u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations">Faith</u>, make certain your <u className="define point" data-toggle="tooltip" data-html="true" title="The Gift of Eternal Life after Death through1. Atonement - the covering of your sins.2. Reconciliation - bringing you together mutually with your creator.<br>3. Redemption - payment for you for the purpose of serving God.">salvation</u>, study the word of God, pray earnestly"],
    ["The value of your goal will determine the strength of your persistence"],
    ["Love is a choice to see someone the way God sees them and the choice to treat someone the way God wants them treated"],
    ["Who you are is your STANDING. How you feel is your STATE. Never judge your righteousness by your sins. "],
    ["The place of failure is the place of recovery"],
    ["You and I are righteous separate from our deeds just as Jesus became sin separate from his deeds **"],
    ["Jesus inducted me into a love that was too big for me (at that time).", "The question now is... are you getting closer? **"],
    ["Holiness is being, Morality is behavior. You can be morale without holiness, but you can never have holiness without morality (morality = Obey the  10 commandments, etc.)"],
    ["With a strong spirit we look to help others. With a weak spirit we look to help ourselves. **"],
    ["Seek to understand others before insisting to be understood"],
    ["True repentance does not leave residue of regret"],
    ["<u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations">Faith</u> in God is different than Faith in your Faith.", " Do you say I can't or I will? ", " For Example: Jesus said I can't do anything without the father **"],
    ["Reconcile with God and man: Move from harm and hostility to harmony **"],
    ["Allow your <u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations"">Faith</u> to conquer your fears **"],
    ["God gives <u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.2. Receiving a gift from God that you do not deserve.For Example see Romans 11:5-6.">Grace</u> but also God demands truth"],
    ["<u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations">Faith</u> is simply taking God at his Word (the bible)"],
    ["In Christianity... Apply what you know and keep trying to grow. **"],
    ["Never confuse where you are "going to" with what you are "going through" **"],
    ["Recipe for Spiritual Strength: 1 gallon of THE WORD (bible), 1 Quart of PRAYER, 1 Pint of PRAISE, 1 cup of PATIENCE (waiting). Mix well. Enjoy !! **"],
    ["A Person of Pride does not acknowledge God for his Blessings"],
    ["It's fine to feel <span className="yellow">H-A-P-P-Y:"  H-Having, A-All, P-People, P-Please, Y-You; Happiness is what happens to you",<p></p>, "  But live in a state of <span className="yellow">J-O-Y:"  J-Jesus, O-Others, Y-Yourself; Joy is your job ** "],
    ["Jesus died to show God Loves you. (Jn 3:16), Jesus rose to show God's power. (Rom 1:16), Jesus ascended to give us access to God's power. (Acts 1:8)"],
    ["Only your Creator and your Redeemer are qualified to direct your life **"],
    ["Fight your battles on your knees and you will win everytime "],
    ["Brokenness is God's requirement for maximum usefulness."],
    ["Faith and Grace are inseperable: <u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations">Faith</u> receives what <u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.2. Receiving a gift from God that you do not deserve.For Example see Romans 11:5-6.">Grace</u> has fully given."],
    ["Love is not LOVE until you Give It"],
    ["Every other Religion asks you to "DO"", "In Christianity it's already "DONE." **"],
    ["You cannot receive new Miracles with your old Mindsets"],
    ["God's Word and Truth must always stand above society's culture. **"],
    ["When God is Silent or you can't find Answers. Stand on his Promises **"],
    ["God will never give you a schedule so full that it excludes Him"],
    ["Sin is the result of your submission to your Temptations and your Desires", <p></p>, "MOTHER (desire) + FATHER (temptation) = BABY (sin) **"],
    ["Do your very best and trust God's <u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.">Grace</u> to do the rest  **"],
    ["Christians must suffer through the Process in order to realize God's Purpose** "],
    ["In times of Trouble, Heartache, and Despair you can WORRY or WORSHIP... Choose!!! **"],
    ["Are you a Traveler passing through life on this Earth", "or Are you a Resident establishing your life on this Earth **"],
    ["You may run faster alone but you will run longer with God and others **"],
    ["Life is not Good or Fair or Kind but remember "ALL" things work together for the Good of those who love the Lord and are called according to his Purpose. **"],
    ["3 P's that get me on my knees: Praise and Petition in Prayer to the Lord **"],
    ["<u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.">Grace</u> frees us from fear and allows us to walk freely in obedience. **"],
    ["There are only two things to do about SIN: Confess IT and Forsake IT !!!"],
    ["I AM COVERED", <p></p>, <p>The Lord walks in front as he leads me</p>, <p>The Lord walks beside as he guides me</p>, <p>The Lord walks behind as he supports me **</p>],
    ["God saved the best for last... Read for yourself Rev 21:1-7, 22:12-14,17 and see how the story ends. **"],
    ["In difficult times where is your FOCUS?", <p></p>, <p>Focus on your problems is to focus on Fear.</p>, <p>Focus on God is to focus on your <u className="define point" data-toggle="tooltip" data-html="true" title="1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations<">Faith</u>. **</p>],
    ["We cannot solve our problems with the same thinking we used to create them. Have the mind of God and the Heart of Jesus. **"],
    ["A person of Spiritual Poverty CANNOT be of use to the Kingdom. **"],
    ["Here is a Trick Question for you:", <p></p>, "What's more important - To know what is in the word or To know what is not in the word? **"],
    ["Don't be like  the Dead Sea... God will flow things to you if he knows things will flow through you. **"],
    ["God's word will keep you from wrong thoughts, words, and actions; or else...", "wrong thoughts, words and actions will keep you from God's word. **"],
    ["God speaks to us in one of FIVE ways ONLY: The Bible, The Church, Confirmation from Others, Circumstances, and The Holy Spirit."],
    ["When I am Thanking God, I get "back to better"", <p></p>, <p>When I am Praising God, I get "back to better"</p>, <p>When I am Worshiping God, I get "back to better" **</p>],
    ["Tell me please...Why do Christians throw away their wounded. Think of Peter, David, Jonah, Moses, Jacob, and Paul",<p></p>, "Jesus instructed us to "STRENGTHEN OUR BROTHERS" after  they repent. **"],
    ["Get Busy.... Are you called to sit or called to STAND?", " What did you do for God today?? **"],
    ["Learn to say "I Can" (Phil 4:13), because "I can't" (John 5:19)"],
    ["Life and Death exist in the Power of the Tongue. Speak Life. ", " Use words to Heal not Hurt. **"],
    ["Your WORDS may be winning the Disagreement while they are most likely LOSING the Agreement."],
    ["The Will of God guides you to His House of <u className="define point" data-toggle="tooltip" data-html="true" title="1. God's unmerited favor.2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.">Grace</u> which is opened by the Key of <u className="define point" data-toggle="tooltip" data-html="true" title="<h4>Faith</h4>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)2. Believing without seeing3. Taking God at his Word (the Bible)4. Hope with expectations">Faith</u> **"],
    ["Obedience to God is always right but Obedience to God is never easy."],
    ["God is very patient...but HIS patience does have an expiration date. "],
    ["Obedience, simply stated, is to do the "next thing" that God tells you to do."],
    ["Disobedience is Rebellion and consequences will definitely come"],
    [<span className="yellow"><u>I AM AFFIRMED</u>", <p></p>, <p>I am Called: Saved</p>, <p>I am Righteous: Correct, Straight</p>, <p>I am Glorified: Honored</p>, <p>I am Justified: Made Right</p>, <p>I am Sanctified: Pure</p>, <p>I am Holy: Set Apart</p>],
    ["Jesus sacrificed his life so I could be free, so I could be whole, so I could tell everyone I know. Have you been talking lately?"],
    ["With Condemnation you will actually sin more. With Conviction you will actually sin less."],
    ["Reliance on your feeling can change your emotional state endlessly. Remembering God's sacrifice will stabilize your feelings and emotions **"],
    ["Do not let obscure passages of scripture confuse your understanding of clear, straight, direct passages of scripture."],
    ["The more you rely on God, the more you glorify God"],
    ["The tongue is humanly untameable (Jam 1:26)", " Consider these three before you speak:", <p></p>, <p>Pause: ask why am I talking? (Jam 1:19)</p>, <p>Ponder: Think: Is my heart right, Is my mind right before I say this? (Luke 2:35)</p>, <p>Pray: Would I say it this way in front of the Lord? (Isa 6:5/Ps 19:14)</p>],
    ["Put everything else aside, Your desires and plans MUST bend the knee to the will of God. **"],
    ["Your confirmation from God awaits your obedience to God"],
    // [<p>OLD COVENANT- Ex 21 stuff - (suzaran-vassar)</p>, <p>God to Jews: You are weak, God: I am strong</p>, <p>God to Jews: You serve me, God: I protect you</p>, <p>God to Jews: If you do ..., God: Then I will ...</p>, <p>NEW COVENANT- Jer 31/Heb 8  stuff - (parity)</p>, <p> Treaty or Covenant of two equals</p>, <p>We work together for protection of each</p>, <p>We have a mindset of family</p>],
    ["OUT WITH THE OLD...God says: If you do, Then I will do (Ex 21)", <p></p>, "IN WITH THE NEW...God says: We work together, We protect each other, We have a mindset of family (Jer 31/Heb 8)"],
    ["The way we knew God 5 years ago is not adequate in times such as now. Relationships with God are ever alive and growing."],
    ["Share the gospel everyday to everyone you encounter; and when necessary... use words."],
    ["Spiritual Maturity Includes:", <p></p>,  <p>Knowing - "waiting" time is not "wasted" time</p>, <p>Knowing - faith in God is NOT trust in God. **</p>],
    ["Without God's passion and purpose your Spiritual Gifts will lead down one of two roads. One of Pride (self righteousness) or One of Passivity (self loathing). **"],
    ["IF-THEN statements with God only work this way: "IF" God's word says it, "Then" it will be so. **"],
    ["Have IN-TI-MA-CY with God. It means: He-can-see-into-me because there can be no healing without revealing**"],
    ["God's blessings are not always rewards for past behavior but preparation for future tests"],
    ["God's great blessings are many times followed by God's great testing"],
    ["TRUST GOD else you fall victim to disbelief then victim to despair then victim to disobedience then land victimized in disgrace. **"],
    ["God's timing is a way to increase your trust in HIM... Consider then: What is God preparing me for?"],
    ["The Holy Spirit does not consult your human schedule before he acts and instructs."],
    ["THE BAKER'S DOZEN", <p></p>, <p className="yellow"><u>13 Signs YOU are Growing in your relationship with Christ:</u></p>, <p>You are more aware of sinfulness and weaknesses,</p>, <p>You respond to sin quickly and with genuine repentance,</p>, <p>You have spiritual battles that become more intense yet you still have joy,</p>, <p>You see your trials and temptations as opportunities for growth,</p>, <p>You view service to God as a high  honor, not a burden,</p>, <p>You are able to view eveything as coming from the Lord,</p>, <p>You spend more time in worship and praise,</p>, <p>You have desire to obey more intensely and sin is less attractive,</p>, <p>You are more and more eager to share your faith,</p>, <p>You experience an increasing awareness of HIS presence,</p>, <p>You LOVE to spend time ALONE with GOD,</p>, <p>You want to give more in every way,</p>, <p>You Sense and Feel God's LOVE.</p>],
    ["Yes, Obedience will cost you, but disobedience will cost you more. **"],
    ["<u>I am Transformed and I Won't Go Back.</u>", <p></p>, <p><span className="yellow">I Won't Go Back - " To Negotiate with Evil,</p>, <p><span className="yellow">I Won't Go Back - " To Lower the Standard,</p>,<p><span className="yellow">I Won't Go Back - "  To Compromise with Culture,</p>, <p><span className="yellow">I Won't Go Back - " To Accept Less than the Lord</p>],
    ["Trials and tests are God's vote of confidence in you."],
    ["God will never test what's trivial, HE will test your treasure."],
    ["True pleasure comes from God only, Satan only knows amusement."],
    ["Every Blessing comes with a Burden, yet In your Weakness, HE is Strong"],
    ["Please Pray and be Patient",<p></p>, "I am not there yet because God is not Done yet **"],
    ["God I want your will, and I want what comes with it",<p></p>, "Would you want Rachel if you knew Leah came with it?"],
    ["Let's Go... You can only get to it if you are willing to go through it!!"],
    ["My Test gives me a Testimony so I can Testify **"],
    ["If you want to beat Satan, you must become as Stubborn as he is."],
    ["Your mind literally thinks 10 thousand thoughts per day.", <p></p>, "Your mind literally thinks 3.5 million thoughts per year.",<p></p>, "How many of your thoughts are on Godly things?", <p></p>, "Renew your mind over and over and be transformed. **"],
    ["**SPOILER ALERT** I know how the story ends... WE WIN!! **"],
    ["Live a good life because of God's Grace and Mercy; not because of duty and responsibility."],
    ["Temptations decrease to you as Grace and Mercy increase in you **"],
    ["Hurting and Suffering are prerequisite to Healing. God's word is both bitter and sweet."],
    ["You CANNOT condone that which God condemns"],
    ["Do Everyday what you would do if you believe God is present with you right now."],
    ["God's mortal man, in the center of God's will, is IMMORTAL, until God is done."],
    ["Think about everyone in your life and ask yourself... Do they Push you back? Do they Hold you back? or Do they Have your back?"],
    ["There are two kinds of spiritual silence...",<p></p>, "Yellow Silence (for cowards:  Peter before the cock crows)",<p></p>, "Golden Silence (for Wise Men: Jesus before Pilate)",<p></p>, "I pray you know the difference."],
    ["GOD DOES NOT GIVE US A SPIRIT OF FEAR...",<p></p>, "Recognize what is not from God from inside yourself", <p></p>, "Remove what is not from God from inside yourself"],
    ["Jesus came to live the life we cannot live and to die the death He did not deserve."],
    ["Slaves serve because they Have to",<p></p>,"Employees serve because they need to", <p></p>,"Christians serve because they want to"],
    ["When you truly trust God, you stop asking him for things and start thanking him for doing those things."],
    ["You need to be and ACTIVE part of your church and community. There is a big difference between BEING a part  of something and BELONGING to something."],
    ["Having principles without practicing them are powerless"],
    ["God has what you don't have", <p></p>, <p>God gives what you can't give</p>, <p>God does what  you can't do</p>, <p>God fixes what you can't fix</p>, "What can God do for you?"],
    ["Renounce anything that does not see Christ as Everything"],
    ["We are never more like Christ than when we forgive others"],
    ["When Satan says never, God say NOW!"],
    ["In my timing I get my results, In God's timing I get God's results", "...think Abraham, Sarah, Hagar, Isaac, Ishmael"],
    ["Prayer needs to be your oxygen, not your oxygen mask"],
    ["Consider this... Rather than asking God why something terrible happened to you", <p></p>, "Ask God how that same thing can be used to glorify Him and bring you closer to Him"],
    ["My friend, You  need to "trust" the Power within  you more than "fear" the Power against you"],
    ["Listen carefully my friend, Can you hear Jesus whispering from inside or do you hear Satan screaming from the outside. (Jam 4:7)"],
    ["You can't hear the voice of God whispering to you because you are focused on Satan screaming at you"],
    ["Grace is God's unmerited favor.", "Grace does God's uplifting of others."],
    ["Disagreement in NOT hate..."],
    ["The success you have in doing Jesus' work will be commensurate with the time you spend with Jesus"],
    ["The opposite of LOVE is Hell"],
    ["Why is it that only Jesus and soldiers volunteer, to the point of death, for their true cause?"],
    ["Love is seeking the other persons hightest good"],
    ["You cannot finish in the flesh that which began in the Spirit"],
    ["YES, God is your GPS but who put in the destination in the first place?"],
    ["Worldly riches always promise what they cannot give."],
    ["We need YOU in Church because YOU are the Church and if YOU are at Church we get to have YOU."],
    ["Study the scriptures because the Bible must answer to the Bible in ALL cases"],
    ["Try to figure this one out..",<p></p>, <p>If you are born once, You will Die twice.</p>, <p></p>, <p>If your are born twice, you only need to Die once</p>],
    ["Doing smart things can add years to your life,", <p></p>,"Doing wise things will add life to your years. Do Both!"],
    ["If you focus on your Goliaths, You will stumble.",<p></p>, "If you focus on God, your Goliaths will tumble"],
    ["If you fear a Giant, Remember the Lion and the Bear.", <p></p>, "Don't look forward in fear, Look back in appreciation"],
    ["<u>Greg's Anthem</u>", <p></p>, <p>Without your Love there is no hope for my tomorrow</p>, <p>I Live because you Live</p>, <p>I Have because you Give</p>, <p>You are the Heartbeat of all I do</p>, <p>I Can't Live one day without YOU!!!</p>],
    ["The size of your Hope determines the size of you Blessing"],
    ["My Friend, you will never know everything about anything. But don't let your confusion disrupt your obedeince to God's Plan."],
    ["Helloooo....Your Silence is Reputational Suicide for the Faith. Allow GOD'S TRUTH to speak through YOU."],
    ["Choose to LOVE"]
];


let scriptures = [
    <p>Love the Lord your God with all your heart and with all your soul and with all your mind.</p>,
    <p>Love your neighbor as yourself.</p>,
    <p>If God be for us, who can be against us?</p>,
    <p>For Those who are lead by the spirit of God are the children of God.</p>,
    <p>For God did not send his son into the world to condemn the world, but to save the world through him.</p>,
    <p>Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.</p>,
    <p> "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need"</p>,
    <p> "...so that your faith might not rest on human wisdom, but on God's power"</p>,
    <p>Come to me, all you who are weary and burdened, and I will give you rest.</p>,
    <p>But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.</p>,
    <p>... for I am gentle and humble in heart, and you will find rest for your souls...</p>,
    <p>For I know the plans I have for you," declares the Lord,"plans to prosper you and not to harm you, plans to give you hope and a future.</p>,
    <p>... Jesus Christ, the Righteous One. He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.</p>,
    <p>I can do all things through him who gives me strength.</p>,
    <p>Therefore, there is now no condemnation for those who are in Christ Jesus...</p>,
    <p>... because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death</p>,
    <p>Let everything that has breath praise the Lord</p>,
    <p>Do not be misled: "Bad company corrupts good character." Come back to your senses as you ought, and stop sinning...</p>,
    <p>"Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need."</p>,
    <p>The light shines in the darkness and the darkness has not overcome it.</p>,
    <p>But when the kindness and love of God our savior appeared, He saved us, not because of righteous things we had done, but because of his mercy...</p>,
    <p>Love does not delight in evil but rejoices with truth. It always protects, always trusts, always hopes, always perseveres.</p>,
    <p>Consider him who endured such opposition from sinners, so that you will not grow weary and lose heart.</p>,
    <p>...Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.</p>,
    <p>... I have loved you with an everlasting love; I have drawn you with unfailing kindness.</p>,
    <p>Now to him who is able to do immeasurably  more than all we ask or imagine according to his power that is at work within us...</p>,
    <p>...In this world you will have trouble. But take heart! I have overcome the world.</p>, <p>All scripture is God-breathed and us useful ... so that the servant of God may be thoroughly equipped for every good work.</p>,
    <p>No, In all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all  creation, will be able to seperate us from the love of God that is in Christ Jesus our Lord</p>,
    <p>See what great love the Father has lavished on us, that we should be called children of God!</p>,
    <p>... And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.</p>,
    <p>So then, just as you received Christ Jesus as Lord, continue to live your lives in him,...strengthened in faith as you  were taught, and overflowing with thankfulness.</p>,
    <p>For there is one God and one mediator between God and mankind, the man Jesus Christ, who gave himself as a ransom for all people...</p>,
    <p>God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.</p>,
    <p>Jesus...which has become the cornerstone. Salvation is found in no one else, for there is no name under heaven given to mankind by which we must be saved.</p>,
    <p>And I pray that you...may have power, with all the Lord's holy people to grasp how wide and long and high and deep is the love of Christ.</p>,
    <p>For the Lord God is a sun and shield; the Lord bestows favor and honor; no good thing does he withhold from those whose walk is blameless.</p>,
    <p>His divine power has given us everything we need for life and Godliness through our knowledge of Him ...</p>,
    <p>And the God of all grace, who called you to his eternal glory in Christ, after you have suffered for a little while, will himself restore you and make you strong, firm, and steadfast.</p>,
    <p>Peace I leave you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.</p>,
    <p>With man this is impossible, but with God all things are possible</p>,
    <p>I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the son of God, who loved me and gave himself for me.</p>
];

export {
    loadStatement,
    oneLiners,
    scriptures
}