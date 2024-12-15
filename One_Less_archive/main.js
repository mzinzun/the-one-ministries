// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>
//   2. Believing without seeing.<br>
//   3. Taking God at his Word (the bible).<br>
//   4. Hope with expectations</p>">Faith</u>



// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God's unmerited favor.<br>
//   2. Receiving a gift from God that you do not deserve.<br>
//   For Example see Romans 11:5-6.</p>">grace</u>



// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Salvation</h4><p>The Gift of Eternal Life after Death through<br>
//   1. Atonement - the covering of your sins.<br>
//   2. Reconciliation - bringing you together mutually with your creator.<br>
//   3. Redemption - payment for you for the purpose of serving God.</p>">salvation</u>



// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Ressurection</h4><p>RESSURECT / RESSURECTED / RESSURECTION<br>
//   To bring One back to life from death NEVER to die again.<br>
//   Jesus Christ is the only One ever resurrected. All others brought
//   back to life from death have died again permanently.</p>">ressurection</u>



// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Confess</h4><p>CONFESS YOUR SINS<br>
//   1. To freely agree or acknowledge that you violated God's law by your willful act.<br>
//   2. Display real sorrow over your sin.<br>
//   3. Ask God to cover your sin with the blood of Jesus and forgive you.<br>
//   4. Faithfully believe that God has heard you and will restore you.</p>">confess</u>


// <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Meditate</h4><p>MEDITATE<br>
//   1. Reading<br>
//   2. Believing<br>
//   3. Absorbing (Thinking over and over again)<br>
//   4. Applying<br>
//   5. Obeying</p>">meditate</u>


$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

let newEventArray = [];
let count = Number($('.less').val());
let logCount = 0;
let newName;
const oneLiners = [
  '<li> Lord, forgive my root sins and my fruit sins **</li><br><br>',
  '<li>Repent your root sins, resist your fruit sins **</li><br><br>',
  '<li>Love is an action word **</li><br><br>',
  '<li>In all things, lead with love **</li><br><br>',
  '<li>Personality and Process must submit to Purpose **</li><br><br>',
  '<li>RIGHT Heart leads  to => RIGHT Thinking<br>RIGHT Thinking leads to => RIGHT Actions<br>RIGHT Actions lead to => RIGHT Character<br>RIGHT Character leads to => RIGHT Success **</li><br><br>',
  '<li>Believe in Miracles - Work Harder - Persevere Always</li><br><br>',
  '<li>Learn to compete - Learn to win - Learn to win when expected - Learn to be a champion</li><br><br>',
  '<li>Keys to Success: Rebrand, Erosion, Core Values, Structure, Credibility</li><br><br>',
  '<li>Know what you STAND for so you don\'t FALL for just anything **</li><br><br>',
  '<li>Satan\'s s Tactics: Discourage - Distract - Deceive</li><br><br>',
  '<li>Jesus came to: Preach and Reach, Seek and Save, take Victims to Victory</li><br><br>',
  '<li>Keep simple things simple<br>-Lead With Love<br>-Forgive Always<br>-Be Good. Be Kind **</li><br><br>',
  '<li>Keep simple things simple<br>Obedience is Belief<br>Disobedience is Unbelief</li><br><br>',
  '<li>Keep simple things simple<br>Don\'t try to know or apply scripture beyond what you understand</li><br><br>',
  '<li>Keep simple things simple<br>Do Less - Pray More<br>Do Less - Faith More<br>Do Less - Trust More<br>Hate Less - Forgive More<br>Demand Less - Love More **</li><br><br>',
  '<li>Keep simple things simple<br>Get the fish on the hook before you try to clean it.</li><br><br>',
  '<li>Will you be victim or victorious. Can\'t be both</li><br><br>',
  '<li>Never judge your STATUS (who you are defined by God:e.g.-righteous,holy)<br> by your STATE (how you feel:e.g.-depressed,angry,worthless)</li><br><br>',
  '<li>Everyone is useful, No one is necessary... except Jesus.</li><br><br>',
  '<li>Rules without Relationship = Rebellion<br>Rules with relationship = Respect **</li><br><br>',
  '<li>Praised behavior will bring about Repeated behavior</li><br><br>',
  '<li>When you are cut, what do you bleed? **</li><br><br>',
  '<li>Mercy is not giving to someone what they deserve. <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> is giving to someone what they do not deserve</li><br><br>',
  '<li>To not forgive yourself is to waste the life and death of Jesus Christ **</li><br><br>',
  '<li>Never choose preference over obedience</li><br><br>',
  '<li>Use your scars to guide your path to the stars **</li><br><br>',
  '<li>Let God turn your mistakes into miracles</li><br><br>',
  '<li>I only want to talk when people want to listen **</li><br><br>',
  '<li>Cure For Doubt: confess doubt, study the evidence for <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u>, make certain your <u class="define point" data-toggle="tooltip" data-html="true" title="<h4>Salvation</h4><p>The Gift of Eternal Life after Death through<br>1. Atonement - the covering of your sins.<br>2. Reconciliation - bringing you together mutually with your creator.<br>3. Redemption - payment for you for the purpose of serving God.</p>">salvation</u>, study the word of God, pray earnestly</li><br><br>',
  '<li>The value of your goal will determine the strength of your persistence</li><br><br>',
  '<li>Love is a choice to see someone the way God sees them and the choice to treat someone the way God wants them treated</li><br><br>',
  '<li>Who you are is your STANDING. How you feel is your STATE. Never judge your righteousness by your sins. </li><br><br>',
  '<li>The place of failure is the place of recovery</li><br><br>',
  '<li>You and I are righteous separate from our deeds just as Jesus became sin separate from his deeds **</li><br><br>',
  '<li>Jesus inducted me into a love that was too big for me (at that time).<br>The question now is... are you getting closer? **</li><br><br>',
  '<li>Holiness is being, Morality is behavior. You can be morale without holiness, but you can never have holiness without morality (morality = Obey the  10 commandments, etc.)</li><br><br>',
  '<li>With a strong spirit we look to help others. With a weak spirit we look to help ourselves. **</li><br><br>',
  '<li>Seek to understand others before insisting to be understood</li><br><br>',
  '<li>True repentance does not leave residue of regret</li><br><br>',
  '<li><u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u> in God is different than Faith in your Faith.<br> Do you say I can\'t or I will?<br>For Example: Jesus said I can\'t do anything without the father **</li><br><br>',
  '<li>Reconcile with God and man: Move from harm and hostility to harmony **</li><br><br>',
  '<li>Allow your <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u> to conquer your fears **</li><br><br>',
  '<li>God gives <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> but also God demands truth</li><br><br>',
  '<li><u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u> is simply taking God at his Word (the bible)</li><br><br>',
  '<li>In Christianity... Apply what you know and keep trying to grow. **</li><br><br>',
  '<li>Never confuse where you are "going to" with what you are "going through" **</li><br><br>',
  '<li>Recipe for Spiritual Strength: 1 gallon of THE WORD (bible), 1 Quart of PRAYER, 1 Pint of PRAISE, 1 cup of PATIENCE (waiting). Mix well. Enjoy !! **</li><br><br>',
  '<li>A Person of Pride does not acknowledge God for his Blessings</li><br><br>',
  '<li>It\'s fine to feel H-A-P-P-Y:  H-Having, A-All, P-People, P-Please, Y-You;<br>  But live in a state of J-O-Y:  J-Jesus, O-Others, Y-Yourself ** </li><br><br>',
  '<li>Jesus died to show God Loves you. (Jn 3:16), Jesus rose to show God\'s power. (Rom 1:16), Jesus ascended to give us access to God\'s power. (Acts 1:8)</li><br><br>',
  '<li>Only your Creator and your Redeemer are qualified to direct your life **</li><br><br>',
  '<li>Fight your battles on your knees and you will win everytime </li><br><br>',
  '<li>Brokenness is God\'s requirement for maximum usefulness.</li><br><br>',
  '<li>Faith and Grace are inseperable: <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u> receives what <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> has fully given.</li><br><br>',
  '<li>Love is not LOVE until you Give It</li><br><br>',
  '<li>Every other Religion asks you to "DO"<br>In Christianity it\'s already "DONE." **</li><br><br>',
  '<li>You cannot receive new Miracles with your old Mindsets</li><br><br>',
  '<li>God\'s Word and Truth must always stand above society\'s culture. **</li><br><br>',
  '<li>When God is Silent or you can\'t find Answers. Stand on his Promises **</li><br><br>',
  '<li>God will never give you a schedule so full that it excludes Him</li><br><br>',
  '<li>Sin is the result of your submission to your Temptations and your Desires<br>MOTHER (desire) + FATHER (temptation) = BABY (sin) **</li><br><br>',
  '<li>Do your very best and trust God\'s <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> to do the rest  **</li><br><br>',
  '<li>Christians must suffer through the Process in order to realize God\'s Purpose** </li><br><br>',
  '<li>In times of Trouble, Heartache, and Despair you can WORRY or WORSHIP... Choose!!! **</li><br><br>',
  '<li>Are you a Traveler passing through life on this Earth<br>or Are you a Resident establishing your life on this Earth **</li><br><br>',
  '<li>You may run faster alone but you will run longer with God and others **</li><br><br>',
  '<li>Life is not Good or Fair or Kind but remember "ALL" things work together for the Good of those who love the Lord and are called according to his Purpose. **</li><br><br>',
  '<li>3 P\'s that get me on my knees: Praise and Petition in Prayer to the Lord **</li><br><br>',
  '<li><u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> frees us from fear and allows us to walk freely in obedience. **</li><br><br>',
  '<li>There are only two things to do about SIN: Confess IT and Forsake IT !!!</li><br><br>',
  '<li>I AM COVERED<br>The Lord walks in front as he leads me<br>The Lord walks beside as he guides me<br>The Lord walks behind as he supports me **</li><br><br>',
  '<li>God saved the best for last... Read for yourself Rev 21:1-7, 22:12-14,17 and see how the story ends. **</li><br><br>',
  '<li>In difficult times where is your FOCUS?<br>Focus on your problems is to focus on Fear.<br>Focus on God is to focus on your <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u>. **</li><br><br>',
  '<li>We cannot solve our problems with the same thinking we used to create them. Have the mind of God and the Heart of Jesus. **</li><br><br>',
  '<li>A person of Spiritual Poverty CANNOT be of use to the Kingdom. **</li><br><br>',
  '<li>Here is a Trick Question for you:<br>What\'s more important - To know what is in the word or To know what is not in the word? **</li><br><br>',
  '<li>Don\'t be like  the Dead Sea... God will flow things to you if he knows things will flow through you. **</li><br><br>',
  '<li>God\'s word will keep you from wrong thoughts, words, and actions; or else...<br>wrong thoughts, words and actions will keep you from God\'s word. **</li><br><br>',
  '<li>God speaks to us in one of FIVE ways ONLY: The Bible, The Church, Confirmation, Circumstances, and The Holy Spirit.</li><br><br>',
  '<li>When I am Thanking God, I get "back to better"<br>When I am Praising God, I get "back to better"<br>When I am Worshiping God, I get "back to better" **</li><br><br>',
  '<li>Tell me please...Why do Christians throw away their wounded. Think of Peter, David, Jonah, Moses, Jacob, Paul<br>Jesus instructed us to "STRENGTHEN OUR BROTHERS" after  they repent. **</li><br><br>',
  '<li>Get Busy.... Are you called to sit or called to STAND?<br> What did you do for God today?? **</li><br><br>',
  '<li>Learn to say "I Can" (Phil 4:13), because "I can\'t" (John 5:19)</li><br><br>',
  '<li>Life and Death exist in the Power of the Tongue. Speak Life.<br>Use words to Heal not Hurt. **</li><br><br>',
  '<li>Your WORDS may be winning the Disagreement while they are most likely LOSING the Agreement.</li><br><br>',
  '<li>The Will of God guides you to His House of <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Grace</h4><p>1. God\'s unmerited favor.<br>2. Receiving a gift from God that you do not deserve.<br>For Example see Romans 11:5-6.</p>">Grace</u> which is opened by the Key of <u class="define point" data-toggle="tooltip" data-html="true" title ="<h4>Faith</h4><p>1. The substance of things hoped for and the evidence of things not seen (Eph 2:8-9)<br>2. Believing without seeing<br>3. Taking God at his Word (the Bible)<br>4. Hope with expectations</p>">Faith</u> **</li><br><br>',
  '<li>Obedience to God is always right but Obedience to God is never easy.</li><br><br>',
  '<li>God is very patient...but HIS patience does have an expiration date. </li><br><br>',
  '<li>Obedience,simply stated, is to do the "next thing" that God tells you to do.</li><br><br>',
  '<li>Disobedience is Rebellion and consequences will definitely come</li><br><br>',
  '<li><u>I AM AFFIRMED</u><br>I am Called: Saved<br>I am Righteous: Correct, Straight<br>I am Glorified: Honored<br>I am Justified: Made Right<br>I am Sanctified: Pure<br>I am Holy: Set Apart</li><br><br>',
  '<li>Jesus sacrificed his life so I could be free, so I could be whole, so I could tell everyone I know. Have you been talking lately?</li><br><br>',
  '<li>With Condemnation you will actually sin more. With Conviction you will actually sin less.</li><br><br>',
  '<li>Reliance on your feeling can change your emotional state endlessly. Remembering God\'s sacrifice will stabilize your feelings and emotions **</li><br><br>',
  '<li>Do not let obscure passages of scripture confuse your understanding of clear, straight, direct passages of scripture.</li><br><br>',
  '<li>The more you rely on God, the more you glorify God</li><br><br>',
  '<li>The tongue is humanly untameable (Jam 1:26)<br> Consider these three before you speak.<br>Pause: ask why am I talking? (Jam 1:19)<br>Ponder: Think: Is my heart right, Is my mind right before I say this? (Luke 2:35)<br>Pray: Would I say it this way in front of the Lord? (Isa 6:5/Ps 19:14)</li><br><br>',
  '<li>Put everything else aside, Your desires and plans MUST bend the knee to the will of God. **</li><br><br>',
  '<li>Your confirmation from God awaits your obedience to God</li><br><br>',
  // '<li>OLD COVENANT- Ex 21 stuff - (suzaran-vassar)<br>God to Jews: You are weak, God: I am strong<br>God to Jews: You serve me, God: I protect you<br>God to Jews: If you do ..., God: Then I will ...<br>NEW COVENANT- Jer 31/Heb 8  stuff - (parity)<br> Treaty or Covenant of two equals<br>We work together for protection of each<br>We have a mindset of family</li>',
  '<li>OUT WITH THE OLD...God says: If you do, Then I will do (Ex 21)<br>IN WITH THE NEW...God says: We work together, We protect each other, We have a mindset of family (Jer 31/Heb 8)</li><br><br>',
  '<li>The way we knew God 5 years ago is not adequate in times such as now. Relationships with God are ever alive and growing.</li><br><br>',
  '<li>Share the gospel everyday to everyone you encounter; and when necessary... use words.</li><br><br>',
  '<li>Spiritual Maturity Includes:<br>Knowing - "waiting" time is not "wasted" time<br>Knowing - faith in God is NOT trust in God. **</li><br><br>',
  '<li>Without God\'s passion and purpose your Spiritual Gifts will lead down one of two roads. One of Pride (self righteousness) or One of Passivity (self loathing). **</li><br><br>',
  '<li>IF-THEN statements with God only work this way: "IF" God\'s word says it, "Then" it will be so. **</li><br><br>',
  '<li>Have IN-TI-MA-CY with God. It means: He-can-see-into-me because there can be no healing without revealing**</li><br><br>',
  '<li>God\'s blessings are not always rewards for past behavior but preparation for future tests</li><br><br>',
  '<li>God\'s great blessings are many times followed by God\'s great testing</li><br><br>',
  '<li>TRUST GOD else you fall victim to disbelief then victim to despair then victim to disobedience then land victimized in disgrace. **</li><br><br>',
  '<li>God\'s timing is a way to increase your trust in HIM... Consider then: What is God preparing me for?</li><br><br>',
  '<li>The Holy Spirit does not consult your human schedule before he acts and instructs.</li><br><br>',
  '<li>THE BAKER\'S DOZEN<br>13 Signs YOU are Growing in your relationship with Christ:<br><br>You are more aware of sinfulness and weaknesses,<br>You respond to sin quickly and with genuine repentance,<br>You have spiritual battles that become more intense yet you still have joy,<br>You see your trials and temptations as opportunities for growth,<br>You view service to God as a high  honor, not a burden,<br>You are able to view eveything as coming from the Lord,<br>You spend more time in worship and praise,<br>You have desire to obey more intensely and sin is less attractive,<br>You are more and more eager to share your faith,<br>You experience an increasing awareness of HIS presence,<br>You LOVE to spend time ALONE with GOD,<br>You want to give more in every way,<br>You Sense and Feel God\'s LOVE.</li><br><br>',
  '<li>Yes, Obedience will cost you, but disobedience will cost you more. **</li><br><br>',
  '<li>I am Transformed and I Won\'t Go Back.<br> To Negotiate with Evil,<br> To Lower the Standard,<br> To Compromise with Culture,<br> To Accept Less than the Lord</li><br><br>',
  '<li>Trials and tests are God\'s vote of confidence in you.</li><br><br>',
  '<li>God will never test what\'s trivial, HE will test your treasure.</li><br><br>',
  
  '<li>True pleasure comes from God only, Satan only knows amusement.</li><br><br>',
  '<li>Every Blessing comes with a Burden, yet In your Weakness, HE is Strong</li><br><br>',
  '<li>Please Pray and be Patient<br>I am not there yet because God is not Done yet **</li><br><br>',
  '<li>God I want your will, and I want what comes with it<br>Would you want Rachel if you knew Leah came with it?</li><br><br>',
  '<li>Let\'s Go... You can only get to it if you are willing to go through it!!</li><br><br>',
  '<li>My Test gives me a Testimony so I can Testify **</li><br><br>',
  '<li>If you want to beat Satan, you must become as Stubborn as he is.</li><br><br>',
  '<li>Your mind literally thinks 10 thousand thoughts per day.<br>Your mind literally thinks 3.5 million thoughts per year.<br>How many of your thoughts are on Godly things?<br>Renew your mind over and over and be transformed. **</li><br><br>',
  '<li>**SPOILER ALERT** I know how the story ends... WE WIN!! **</li><br><br>',
  '<li>Live a good life because of God\'s Grace and Mercy; not because of duty and responsibility.</li><br><br>',
  '<li>Temptations decrease to you as Grace and Mercy increase in you **</li><br><br>',
  '<li>Hurting and Suffering are prerequisite to Healing. God\'s word is both bitter and sweet.</li><br><br>',
  '<li>You CANNOT condone that which God condemns</li><br><br>',
  '<li>Do Everyday what you would do if you believe God is present with you right now.</li><br><br>',
  '<li>God\'s mortal man, in the center of God\'s will, is IMMORTAL, until God is done.</li><br><br>',
  '<li>Think about everyone in your life and ask yourself... Do they Push you back? Do they Hold you back? or Do they Have your back?</li><br><br>',
  '<li>There are two kinds of spiritual silence...<br>Yellow Silence (for cowards)<br>Golden Silence (for Wise Men)<br>I pray you know the difference.</li><br><br>',
  '<li>GOD DOES NOT GIVE US A SPIRIT OF FEAR...<br>Recognize what is not from God from inside yourself<br>Remove what is not from God from inside yourself</li><br><br>',
  '<li>Jesus came to live the life we cannot live and to die the death He did not deserve.</li><br><br>',
  '<li>Slaves serve because they Have to<br>Employees serve because they need to<br>Christians serve because they want to</li><br><br>',
  '<li>When you truly trust God, you stop asking him for things and start thanking him for doing those things.</li><br><br>',
  '<li>You need to be and ACTIVE part of your church and community. There is a big difference between BEING a part  of something and BELONGING to something.</li><br><br>',
  '<li>Having principles without practicing them are powerless</li><br><br>',
  '<li>God has what you don\'t have<br>God gives what you can\'t give<br>God does what  you can\'t do<br>God fixes what you can\'t fix<br>What can God do for you?</li><br><br>',
  '<li>Renounce anything that does not see Christ as Everything</li><br><br>',
  '<li>We are never more like Christ than when we forgive others</li><br><br>',
  '<li>When Satan says never, God say NOW!</li><br><br>',
  '<li>In my timing I get my results, In God\'s timing I get God\'s results<br>...think Abraham, Sarah, Hagar, Isaac, Ishmael</li><br><br>',
  '<li>Prayer needs to be your oxygen, not your oxygen mask</li><br><br>',
  '<li></li><br><br>'

];
//`** GM Original (197-52 = 145 total)`
const myForm = document.getElementById('signUp');
$('#note').hide();
$('.randomNumber').hide();

$('.totCount').hide();
//  how to make an "open/close button work"
let $tester = $(".tester");
$('.tes').hide();
$(".openBtn").click(function (e) {
  let [_, num] = e.currentTarget.id.split('-');
  let $theElement = $(`.tester${num}`);
  $theElement.slideToggle("slow");
});

$(".layout").hide();
$("#title1, #title2, #title3").click(function (e) {
  $(".layout", $(e.target.parentElement.parentElement)).slideToggle("slow");
});



//////////////////////////////////// "The Grace in _______________ Function" //////////////////////////
$(".graceBtn").click(function () {
  console.log('click grace');
});



// Function to capture "one less events" and the date of the event
let d = new Date();
let currDay = d.getDay();
let currMonth = d.getMonth();
let currDate = d.getDate();
let currYear = d.getFullYear();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let today = `${dayNames[currDay]}, ${monthNames[currMonth]} ${currDate}, ${currYear}`;
$('#today').text(today);
$("#share").submit(e => {
  e.preventDefault();
  let newStory = $('#story').val();
  let newName = $('#userName').val();
  let newCity = $('#userCity').val();
  newEventArray.push({ name: newName, city: newCity, story: newStory });
  $("input.clear").val("");
  $('.output').prepend(`<em class="color">${newName}</em> from <em class="color"> ${newCity}</em> has this story:<p> ${newStory}</p>`);
  $('.output').prepend(`<p>${today}</p>`);
  $('.totCount').show();
});

////////////////////////////////// Rotate Scripture /////////////////////////////////////////
let loadScripture = ['Love the Lord your God with all your heart and with all your soul and with all your mind.', 'Love your neighbor as yourself.', 'If God be for us, who can be against us?', 'For Those who are lead by the spirit of God are the children of God.', 'For God did not send his son into the world to condemn the world, but to save the world through him.', 'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.', "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need", "...so that your faith might not rest on human wisdom, but on God's power", 'Come to me, all you who are weary and burdened, and I will give you rest.', 'But you were washed, you were sanctified, you were justified in the name of the Lord Jesus Christ and by the Spirit of our God.', '... for I am gentle and humble in heart, and you will find rest for your souls...', 'For I know the plans I have for you," declares the Lord,"plans to prosper you and not to harm you, plans to give you hope and a future.', '... Jesus Christ, the Righteous One. He is the atoning sacrifice for our sins, and not only for ours but also for the sins of the whole world.', 'I can do all things through him who gives me strength.', 'Therefore, there is now no condemnation for those who are in Christ Jesus...', '... because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death', 'Let everything that has breath praise the Lord', 'Do not be misled: "Bad company corrupts good character." Come back to your senses as you ought, and stop sinning...', "Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.", 'The light shines in the darkness and the darkness has not overcome it.', 'But when the kindness and love of God our savior appeared, He saved us, not because of righteous things we had done, but because of his mercy...', 'Love does not delight in evil but rejoices with truth. It always protects, always trusts, always hopes, always perseveres.', 'Consider him who endured such opposition from sinners, so that you will not grow weary and lose heart.', '...Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', '... I have loved you with an everlasting love; I have drawn you with unfailing kindness.', 'Now to him who is able to do immeasurably  more than all we ask or imagine according to his power that is at work within us...', '...In this world you will have trouble. But take heart! I have overcome the world.', 'All scripture is God-breathed and us useful ... so that the servant of God may be thoroughly equipped for every good work.', 'No, In all these things we are more than conquerors through him who loved us. For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all  creation, will be able to seperate us from the love of God that is in Christ Jesus our Lord', 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!... ', '... And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.','So then, just as you received Christ Jesus as Lord, continue to live your lives in him,...strengthened in faith as you  were taught, and overflowing with thankfulness.','For there is one God and one mediator between God and mankind, the man Jesus Christ, who gave himself as a ransom for all people...', 'God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.', 'Jesus... which has become the cornerstone. Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.', 'And I pray that you... may have power, with all the Lord\'s holy  people, to grasp how wide and long and high and deep is the love of Christ', 'and to know this love that surpasses knowledge--that you may be filled to the measure of all the fullness of God.', 'For the Lord God is a sun and shield; the Lord bestows favor and honor; no good thing does he withhold from those whose walk is blameless.', ''];
////////////////////////////// Function to Update Scripture ////////////////////////////////
let scripObject = {
  keepRunning: false,
  timerHandler: null,
};

function updateScrip() {
  function updateNext() {
    if (scripObject.keepRunning === false) {
      return;
    }
    $('#scrip').text(`"${loadScripture[indexValue]}"`);
    indexValue = (indexValue + 1) % loadScripture.length;
    scripObject.timerHandler = setTimeout(() => updateNext(), 4000);
  }

  if (scripObject.keepRunning === true) {
    return;
  }

  scripObject.keepRunning = true;
  let indexValue = 0;
  updateNext();
} // end update scrip
updateScrip();

// Function to capture first name of user and clear the form
$("#signUp").submit(event => {
  event.preventDefault();
  newName = $('#firstName').val();
  // });

  // Function to accept payment method, payment amount, payment cause
  let amtEveryPay = Number($('#everyPay').val());
  let amtMthPay = Number($('#monthlyPay').val());
  let amtOneTimePay = Number($('#oneTimePay').val());

  const linkPrice = {
    0: amtEveryPay,
    1: amtMthPay,
    2: amtOneTimePay
  };
  const sentence = {
    0: 'Pay Each Use',
    1: 'Pay Monthly',
    2: 'One Time Payment'
  };
  const charity = {
    0: 'Homeless',
    1: 'Pregnant & New Mothers',
    2: 'Substance Abuse',
    3: 'Daily Food and Household',
    4: 'Brown Bag for Kids',
    5: 'General Fund',
    6: 'Senior Assistance'
  };

  let usageType = Number($("input[name='paymentType']:checked").val());
  let usageCause = $("input[name='inlineRadioOptions']:checked").val();

  $('#rtnMsg').html(`${newName} Thank you for selecting the "${sentence[usageType]}" method in the amount of $${linkPrice[usageType]}.00 to support the ${charity[usageCause]} cause.`);
  myForm.reset();


  /////////////////// Function to Update the Progress Bar /////////////////////////////
  /* Lines 118-119 show in console this  way. I created variables for easier understanding and usage
  $("input[name='paymentType']:checked").val()
  $("input[name='inlineRadioOptions']:checked").val()
  */
  let item = $(`div[data-category="${usageCause}"]`);
  let goal = 5000;
  let currentValueNow = 0;
  let donation = linkPrice[usageType]; // need to stipulate which cause
  let total = currentValueNow + donation; // progress bar's new amount
  let progress = (total / goal) * 100;
  function updateBar() {
    $(item).css('width', progress + '%');
  }
  updateBar();
});

/////////////////////// Function to Add to the "One Less Event" count ////////////////////
$('#yourEvent').on('click', function (e) {
  e.preventDefault();
  let newCount = count + 1;
  $('.less').text(`${newCount}`);
  count = newCount;
  $('.totCount').hide();
});


////////////////////// Function for Prayer Requests //////////////////////////
$("#prayBtn").click(event => {
  event.preventDefault();
  let yourRequest = $('#praySubject').val();
  let yourName = $('#prayName').val();
  $('#praySubmission').text(`${yourName}, right now we are praying for ${yourRequest}`);
  $('input').val("");
  $('#note').show();
});

////////////////////////// Function for Confess Sin Animations ///////////////////////
$("#confessBtn").click(event => {
  event.preventDefault();
  $('.nameSin').addClass('slider').css('background-color', 'black');
  $('input').css('background-color', 'black');
  $('#sinResponse').hide();
});

$('.nameSin').on('animationstart', () => {
  setTimeout(() => {
    $('.nameSin').css('background-color', 'red');
    $('input').css('background-color', 'red');
  }, 2500);
});

$('.nameSin').on('animationend', () => {
  $('#sinResponse').show();
  $('.nameSin').removeClass('slider').css('background-color', 'white');
  $('input').css('background-color', 'white');
  let yourSin = $('#sin').val();
  $('#sinResponse').html(`God is Faithful and just to Forgive ${yourSin}.</p><p class=""><i class="">JESUS</i> Nailed your <i class="">SINS</i> to the <i class="">CROSS</i> and <i class="">WASHED</i> them with his <i class="">BLOOD</i>.</p><p class="white">IT IS FINISHED!!</p><p>Col 2:13-15</p>`);
  $('#sin').val("");
});

////////////////////// Function to Randomize One Liners //////////////////////////
let choice;
let newChoice;
let finalChoice;
function oneLine() {
  choice = Math.random();
  newChoice = choice * oneLiners.length;
  finalChoice = Math.floor(newChoice);
}

$(".rand").click(function () {
  oneLine();
  $('.randomNumber').show();
  $('.randNumber').text(`The One Liner for Meditation is: `);
  $('.oneLiner').html(oneLiners[finalChoice]);
})

$(".goBack").click(function () {
  window.history.back();
})

$(".fullList").hide();
$(".meditateList").click(function () {
  for (let i = 0; i <= oneLiners.length - 1; i++) {
    $(".fullList").html(`The Complete List of Meditation Topics<br>===================================<br><br> ${(oneLiners.join(''))}`);
  }
  $('[data-toggle="tooltip"]').tooltip();
  // $(".fullList").html(`All Meditation Topics<br>${oneLiners}`);
  $(".fullList").slideToggle();
}
);


//////////////// Function to List "Moral Inventory" //////////////////////////
$(".moralForm").submit(e => {
  event.preventDefault();
  let newListItem = $("#list").val();
  if (newListItem === " ") {
    return true
  }
  $(":input").val("");

  $('.listing').append(`<li class="newItem">${newListItem + " " + " "}<button id='done'>Delete</button></li><br>`);
  let $li = $('li');
});

$('.listing').on('click', '#done', function () {
  $(this).parent().hide();
});

//////////////// Function to do Journal Entries //////////////////

$(".journalForm").submit(e => {
  event.preventDefault();
  let newEntry = $("#entry").val();
  let newScripEntry = $("#scripEntry").val();
  if (newEntry === " " || newScripEntry === " ") {
    return true
  }
  $(":input").val("");

  $('.journalEntry').prepend(`<span class="newItem">${today}<p>Scripture: ${newScripEntry}</p><p>Log Entry: ${newEntry + " " + " "}</p><button class='remove'>Remove</button></span><br>`);
  // let $li = $('li');
  let newJournalCount = logCount + 1;
  $('.journalCount').text(`${newJournalCount}`);
  logCount = newJournalCount;
});
$('.journalEntry').on('click', '.remove', function () {
  $(this).parent().hide();
});
///////////////// Devotionals Toggle Acions ///////////////
$('.devoBible').hide();
$('.devoTheme').hide();
$('.devoBook').hide();
$('.devoCharacter').hide();
$('.devoTestament').hide();
// $('.allDevo').hide();
$(".devotions").on('click', '.devoBtn1', function () {
  $('.devoBible').slideToggle();
})

$(".devotions").on('click', '.devoBtn2', function () {
  $('.devoTheme').slideToggle();
})

$(".devotions").on('click', '.devoBtn3', function () {
  $('.devoBook').slideToggle();
})

$(".devotions").on('click', '.devoBtn4', function () {
  $('.devoCharacter').slideToggle();
})

$('.devoBtn5').mouseenter(function () {
  console.log('entering');
  $('.devoTestament').show();
})
$('.devoBtn5').mouseleave(function () {
  console.log('leaving');
  $('.devoTestament').hide();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////
let godsWords = ['Where were you when I laid the earth\'s foundation? Tell  me if you understand.', 'Have you ever given orders to the morning, or shown the dawn its place...?', 'What  is the way to the place where the lightning is dispersed, or the place where the east winds are scattered over the earth?', 'The LORD, The  LORD, the compassionate and gracious  God, slow  to anger, abounding in love and faithfulness, maintaining love to thousands, and forgiving wickedness, rebellion, and sin. Yet he does not leave the guilty unpunished...','I AM WHO I AM...I AM has sent me to you']
let godObject = {
  keepRunning: false,
  timerHandler: null,
};

function updateWords() {
  function updateNext() {
    if (godObject.keepRunning === false) {
      return;
    }
    $('#gWords').text(`"${godsWords[indexValue]}"`);
    indexValue = (indexValue + 1) % godsWords.length;
    godObject.timerHandler = setTimeout(() => updateNext(), 4000);
  }

  if (godObject.keepRunning === true) {
    return;
  }

  godObject.keepRunning = true;
  let indexValue = 0;
  updateNext();
} // end update God's Words
updateWords();

