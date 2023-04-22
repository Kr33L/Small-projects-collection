<script>
	import addPageClass from '$lib/utils/addPageClass';

	const currentDate = () => new Date().toDateString();
	const image = (name) => `/images/bastion/${name}`;
</script>

<svelte:body use:addPageClass={'page'} />

<main>
	<section class="content">
		<header>
			<img class="center-img" src={image('bastion.png')} alt="Bastion" />
			<p class="date">{currentDate()}</p>
			<p>
				Bastion is an action RPG game that redefines storytelling in games, with a reactive narrator, "The Stranger", who marks your every move as you discover the secrets of the Calamity; a surreal
				catastrophe that shattered the world to pieces.
			</p>
			<img class="center-img" src={image('bastionlookup.gif')} alt="Kid looking up" />
			<hr />
		</header>

		<h3>Characters</h3>
		<div class="left-text">
			<img src={image('bastionkidsit.png')} alt="The Kid" />
			<h4>The Kid</h4>
			<p>
				The Kid is a survivor of the calamity; the main character and silent protagonist of the game. The Kid's most defining traits are his determination and sense of duty. Due to his solitary past,
				The Kid tends to be stoic yet compassionate. He invites any survivors he does encounter to the Bastion without hesitation. The Kid is proficient with a variety of weapons and aspired to join
				the Marshals after completing his second term on the Rippling Walls.
			</p>
		</div>

		<div class="right-text">
			<img id="rucks" src={image('rucksit.png')} alt="Rucks" />
			<h4>Rucks, the Stranger</h4>
			<p class="quote">"Now The Kid sees somethin' stranger still; his mind races.</p>
			<p class="quote">Did anyone else survive?</p>
			<p class="quote">Sure enough, he finds another. He finds me."</p>
			<p>
				The Kid meets Rucks for the first time when he arrives at the Bastion. He is a survivor of the calamity. After the Calamity, the original cores powering the Bastion have inexplicably been
				rendered inert. The Stranger sends The Kid to scavenge for more in ruins of Caelondia.
			</p>
		</div>

		<div class="left-text">
			<img src={image('zia.png')} alt="Zia" />
			<h4>Zia</h4>
			<p>
				Zia is a survivor of the Calamity. She is an ethnic Ura who was born and raised in Caelondia, and as a consequence, knows little of her Uran heritage. Shortly after the Kid falls into Prosper
				Bluff, he is startled by the sound of a woman's voice. The melody leads the Kid to Zia's campsite, where he convinces her to return with him to the Bastion. Zia brings her guitar and her
				father's Hidebound Journal, which she is unable to read herself. She pitches a tent near the Monument and is supposedly a skilled cook.
			</p>
		</div>

		<div class="right-text">
			<img src={image('zulf.png')} alt="Zulf" />
			<h4>Zulf</h4>
			<p>
				Zulf is a survivor of the Calamity. As an ura from the Tazal Terminals, Zulf moves to Caelondia as an ambassador of peace and good will. The Kid finds Zulf in the Hanging Gardens, staring
				helplessly into the sky. Because the Kid is the first survivor Zulf has encountered, particularly amongst the many petrified victims in the Gardens, Zulf is easily convinced to return to the
				Bastion.
			</p>
		</div>
		<hr />

		<div>
			<h3>Enemies</h3>
			<div class="enemies-list">
				<ul>
					<li>Squirt</li>
					<li>Gasfella</li>
					<li>Scumbag</li>
				</ul>
				<ul>
					<li>Pecker</li>
					<li>Doppelganger</li>
					<li>Pincushion</li>
				</ul>
				<ul>
					<li>Rattle-tail</li>
					<li>Ura Warriors</li>
				</ul>
				<ul>
					<li>Stabweed</li>
					<li>Vineapple</li>
					<li>Swampweed</li>
				</ul>
			</div>
			<img class="center-img" src={image('bastioncombat.gif')} alt="Kid fighting monsters" />
			<hr />
		</div>

		<footer>
			<p>
				by Supergiant Games <br />Store page:
				<a href="https://store.steampowered.com/app/107100/bastion/">Steam</a>
			</p>
			<p>Related:</p>
			<ul>
				<li><a href="https://en.wikipedia.org/wiki/Bastion_(video_game)">Wikipedia</a></li>
				<li><a href="https://www.supergiantgames.com/games/bastion/">Developer website</a></li>
			</ul>
		</footer>
	</section>
</main>

<!-- STYLE -->

<style>
	:global(body.page) {
		background-image: url(/images/bastion/bastionbg.png);
		background-size: cover;
		background-color: wheat;
		cursor: url('/images/bastion/cursor-n.png'), auto;
	}

	main {
		font-family: 'Consolas', Courier, monospace;
	}

	section {
		background: rgba(245, 222, 179, 0.9);
		border-style: groove;
		border-color: wheat;
		border-radius: 10px 10px 10px 10px;
		box-sizing: border-box;
		box-shadow: 0 0 150px 4px #000;
		max-width: 960px;
		margin: auto;
		padding: 0px 10px 0px 10px;
	}

	hr {
		border: 1px inset wheat;
	}

	.enemies-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.left-text img {
		text-align: left;
		float: right;
		max-width: 85px;
	}

	#rucks {
		max-width: 120px;
	}

	.right-text img {
		text-align: right;
		float: left;
		max-width: 90px;
	}

	.quote {
		text-align: center;
		font-style: italic;
		margin: 0.1rem;
	}

	.center-img {
		display: flex;
		text-align: center;
		margin: auto;
		max-width: 100%;
	}

	.date {
		text-align: center;
		max-width: 100px;
		margin: auto;
		margin-top: 20px;
		margin-bottom: 20px;
		border: 3px outset wheat;
		border-radius: 15px;
		box-shadow: 0px 0px 10px 1px;
	}
</style>
