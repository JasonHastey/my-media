import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Slider from '../components/Slider'
import '../App.css'
import { Form } from 'react-bootstrap'
const HomePage = () => {
	const movieExamples = [
		{
			title: 'Parasite',
			vote_average: 8.5,
			overview:
				"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
			release_date: '2019-05-30',
			adult: false,
			backdrop_path: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
			vote_count: 11106,
			genre_ids: [35, 53, 18],
			id: 496243,
			original_language: 'ko',
			original_title: '기생충',
			poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
			video: false,
			popularity: 170.545,
		},
		{
			adult: false,
			backdrop_path: '/1zXycu4ivqSobqAncmlnd2dLpxH.jpg',
			genre_ids: [10752, 18, 53, 28],
			id: 2440,
			original_language: 'ko',
			original_title: '공동경비구역 JSA',
			overview:
				"In the DMZ separating North and South Korea, two North Korean soldiers have been killed, supposedly by one South Korean soldier. But the 11 bullets found in the bodies, together with the 5 remaining bullets in the assassin's magazine clip, amount to 16 bullets for a gun that should normally hold 15 bullets. The investigating Swiss/Swedish team from the neutral countries overseeing the DMZ suspects that another, unknown party was involved - all of which points to some sort of cover up. The truth is much simpler and much more tragic.",
			poster_path: '/ftss3ZUM12G87RKyQuoEHZYwQeY.jpg',
			release_date: '2000-09-09',
			title: 'Joint Security Area',
			video: false,
			vote_average: 7.8,
			vote_count: 348,
			popularity: 8.715,
		},
		{
			adult: false,
			backdrop_path: '/dnpSUzbvUy1sULcLddMMpUXsCAo.jpg',
			genre_ids: [28, 18, 35],
			vote_count: 110,
			original_language: 'ko',
			original_title: '은밀하게 위대하게',
			poster_path: '/n5ESZzOGxnmugkLvyd45wOsn0mg.jpg',
			id: 199584,
			video: false,
			vote_average: 7,
			title: 'Secretly, Greatly',
			overview:
				'As a North Korean sleeper cell agent, Ryu-han infiltrates the South and assumes the role of a village idiot in a rural town. He observes the townsfolk and waits patiently for his mission. One day, after 2 years of playing the role of the village idiot, fellow elite spies Hae-rang, posed as a rock star and Hae-jin, posed as an ordinary student, are dispatched to the same town as Ryu-han. He helps the other two spies settle in and teach them how to adjust in the South. There is a sudden drastic political power shift in the North and all three spies receive an urgent and ultimate mission.',
			release_date: '2013-06-05',
			popularity: 6.396,
		},
		{
			genre_ids: [28, 53],
			original_language: 'ko',
			original_title: '베를린',
			poster_path: '/bX8OXtPoxbJWcHszHmYQGhLtTmm.jpg',
			video: false,
			vote_average: 6.7,
			vote_count: 128,
			overview:
				'When an illicit arms deal goes bad, North Korean spy Pyo Jong-seong finds himself targeted not just by the South Koreans but also his own bosses.',
			id: 160704,
			title: 'The Berlin File',
			release_date: '2013-01-30',
			adult: false,
			backdrop_path: '/lt0A7EgFJXjo6w6tq05ivGXQjee.jpg',
			popularity: 8.458,
		},
		{
			adult: false,
			backdrop_path: '/3eEtOooEzdpIA9hf0V4b5DFqyjd.jpg',
			genre_ids: [28, 18, 53],
			id: 435841,
			original_language: 'ko',
			original_title: '강철비',
			overview:
				"Amid a coup, a North Korean agent escapes south with the country's injured leader in an attempt to keep him alive and prevent a Korean war.",
			poster_path: '/zCXpkcMAUxtOp55bWMpBZjpHr5g.jpg',
			release_date: '2017-12-14',
			title: 'Steel Rain',
			video: false,
			vote_average: 7.3,
			vote_count: 105,
			popularity: 19.466,
		},
		{
			video: false,
			vote_average: 8,
			overview:
				'A son to a high-ranked official in North Korea commits a series of murders going across the countries around the world. The movie depicts the following events as South Korea, North Korea and Interpol start chasing down after him.',
			release_date: '2017-08-23',
			adult: false,
			backdrop_path: '/nx0SKrYEQLvrvFQI9OZ0nJeiVUM.jpg',
			vote_count: 112,
			genre_ids: [80, 53, 28],
			title: 'V.I.P.',
			original_language: 'ko',
			original_title: '브이아이피',
			poster_path: '/tUgzvnPOVMXjrqIq9LtXYXosf3S.jpg',
			id: 435601,
			popularity: 31.322,
		},
		{
			adult: false,
			backdrop_path: '/5fSiKlAibnZetnWjIQRnFVeknKq.jpg',
			genre_ids: [28, 12, 18, 36, 10752],
			id: 11658,
			original_language: 'ko',
			original_title: '태극기 휘날리며',
			overview:
				'When two brothers are forced to fight in the Korean War, the elder decides to take the riskiest missions if it will help shield the younger from battle.',
			poster_path: '/vyG8qpimh3XSlxc6OmPq8LJRJl.jpg',
			release_date: '2004-02-05',
			title: 'Tae Guk Gi: The Brotherhood of War',
			video: false,
			vote_average: 8,
			vote_count: 436,
			popularity: 10.123,
		},
		{
			adult: false,
			backdrop_path: '/yFyDj6Q1OlpxpCbiW3chrp17WnD.jpg',
			genre_ids: [28],
			id: 434119,
			original_language: 'ko',
			original_title: '공조',
			overview:
				'When a crime organization from North Korea crosses borders and enters South Korean soil, a South Korean detective must cooperate with a North Korean detective to investigate their whereabouts.',
			poster_path: '/gw1iBP09ZaxUgHlvmPpC4Y7dgq6.jpg',
			release_date: '2017-01-18',
			title: 'Confidential Assignment',
			video: false,
			vote_average: 6.9,
			vote_count: 50,
			popularity: 15.66,
		},
		{
			genre_ids: [18, 28, 53],
			original_language: 'ko',
			original_title: '동창생',
			poster_path: '/ybM400b3vesnoNzOlTlAmHeEYPq.jpg',
			video: false,
			vote_average: 7.3,
			vote_count: 79,
			overview:
				"The son of a North Korean spy decides to follow in his father's footsteps to protect his little sister. After his father’s botched espionage mission, North Korean Myung-hoon and his young sister Hye-in are sent to a labor prison camp. In order to save his sister’s life, Myung-hoon volunteers to become a spy and infiltrates the South as a teenage defector. While attending high school in the South, he meets another girl named Hye-in, and rescues her when she comes under attack. South Korean Intelligence soon discover Myung-hoon’s activities and begin tracking him, all the while his own government sends a vicious assassin to eliminate him.",
			id: 235704,
			title: 'Commitment',
			release_date: '2013-11-05',
			adult: false,
			backdrop_path: '/oPruZy7rmCDJcZAwLykFWAyMB3V.jpg',
			popularity: 8.087,
		},
		{
			adult: false,
			backdrop_path: '/zayiaAf0jvN9V8GsSfuX55Rw33S.jpg',
			genre_ids: [28, 12, 18, 53],
			original_language: 'ko',
			original_title: '쉬리',
			poster_path: '/7rmye0ThMHMT2VhZj7zdyCcHQVe.jpg',
			id: 10355,
			video: false,
			title: 'Shiri',
			vote_count: 89,
			overview:
				"North Korea's 8th Special Forces hijacks a shipment of CTX, a potent new liquid explosive, and threatens South Korea as part of a plot to re-unify the two countries.Ryu and Lee, special agents of O.P., South Korea's secret intelligence service, attempt to track down the terrorists and find the CTX. Meanwhile Hee, the 8th's ultra-bad female sniper, resurfaces to wreak havoc and haunt Ryu.",
			release_date: '1999-02-13',
			vote_average: 6.2,
			popularity: 6.839,
		},
		{
			original_language: 'ko',
			original_title: '택시운전사',
			poster_path: '/iXVaWbxmyPk4KZGZk5GGDGFieMX.jpg',
			video: false,
			vote_average: 8.1,
			overview:
				'May, 1980. Man-seob is a taxi driver in Seoul who lives from hand to mouth, raising his young daughter alone. One day, he hears that there is a foreigner who will pay big money for a drive down to Gwangju city. Not knowing that he’s a German journalist with a hidden agenda, Man-seob takes the job.',
			release_date: '2017-08-02',
			id: 437068,
			vote_count: 463,
			adult: false,
			backdrop_path: '/dbXjTu5J00kCggPnQlDpVZmDBil.jpg',
			title: 'A Taxi Driver',
			genre_ids: [18, 36, 28],
			popularity: 10.649,
		},
		{
			adult: false,
			backdrop_path: '/fhDhmGcH0n8oEJv0MVdzz8uYkG2.jpg',
			genre_ids: [18, 28],
			id: 50090,
			original_language: 'ko',
			original_title: '의형제',
			overview:
				'Six years ago a mysterious shooting takes place in Seoul. The after effects of the shooting results in Han-kyu Lee (Song Kang-Ho) losing his job at the NIS (National Intelligence Service). Six years later, Ji-won Song (Kang Dong-Won), an ex North Korean spy. Now operates somewhere in the Seoul metropolitan area. As these two men hide their identities and work their particular angles, trouble brews again...',
			poster_path: '/uLU1Gwq8xLUjBax2JI4G2JC85ML.jpg',
			release_date: '2010-02-04',
			title: 'Secret Reunion',
			video: false,
			vote_average: 6.4,
			vote_count: 76,
			popularity: 6.307,
		},
		{
			adult: false,
			backdrop_path: '/fReqenpUkU83y7rpEMscE5EjoDr.jpg',
			genre_ids: [18, 36, 53],
			original_language: 'ko',
			original_title: '공작',
			poster_path: '/ib7SNOKqPKLyVXTjhuVJIglTC3E.jpg',
			video: false,
			vote_average: 7.3,
			id: 517991,
			overview:
				'South Korea, 1993. An agent of the National Intelligence Service is sent to Beijing with the assignment of infiltrating a group of North Korean officials with the ultimate goal of obtaining information about the North Korean nuclear program.',
			release_date: '2018-08-08',
			vote_count: 90,
			title: 'The Spy Gone North',
			popularity: 8.948,
		},
		{
			adult: false,
			backdrop_path: '/xENJCaWyezrEn3IvFCGuPHAuwUV.jpg',
			genre_ids: [27, 18, 878],
			original_language: 'ko',
			original_title: '괴물',
			poster_path: '/dEDLY3KeghKFzks5nTDWdigVikr.jpg',
			video: false,
			vote_average: 7,
			vote_count: 1829,
			overview:
				"Following the dumping of gallons of toxic waste in the river, a giant mutated squid-like appears and begins attacking the populace. Gang-du's daughter Hyun-seo is snatched up by the creature; with his family to assist him, he sets off to find her.",
			release_date: '2006-07-27',
			title: 'The Host',
			id: 1255,
			popularity: 31.677,
		},
		{
			video: false,
			vote_average: 6.8,
			title: 'World War Z',
			vote_count: 11888,
			overview:
				'Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.',
			adult: false,
			backdrop_path: '/upsk7nfUjf8ZSYuokwa5U5YXERm.jpg',
			id: 72190,
			genre_ids: [28, 18, 27, 878, 53],
			release_date: '2013-06-20',
			original_language: 'en',
			original_title: 'World War Z',
			poster_path: '/1SWBSYJsnyhdNRfLI1T6RsCxAQ4.jpg',
			popularity: 67.587,
		},
		{
			genre_ids: [18, 36, 53],
			original_language: 'ko',
			original_title: '1987',
			poster_path: '/3KgL5KiGk8ABfMFHzGP2GnoH8sL.jpg',
			title: '1987: When the Day Comes',
			id: 437103,
			vote_average: 8.1,
			overview:
				'In 1987 Korea, under an oppressive military regime, a college student gets killed during a police interrogation involving torture. Government of officials are quick to cover up the death and order the body to be cremated. A prosecutor who is supposed to sign the cremation release, raises questions about a 21-year-old kid dying of a heart attack, and he begins looking into the case for truth. Despite a systematic attempt to silence everyone involved in the case, the truth gets out, causing an eruption of public outrage.',
			release_date: '2017-12-27',
			vote_count: 76,
			adult: false,
			backdrop_path: '/no875UXrxLQhjITs2SC9OOCn94M.jpg',
			video: false,
			popularity: 26.744,
		},
		{
			video: false,
			vote_average: 8,
			overview:
				'Having died unexpectedly, firefighter Ja-hong is taken to the afterlife by 3 afterlife guardians. Only when he passes 7 trials over 49 days and proves he was innocent in human life, he’s able to reincarnate, and his 3 afterlife guardians are by his side to defend him in trial.',
			release_date: '2017-12-14',
			title: 'Along with the Gods: The Two Worlds',
			adult: false,
			backdrop_path: '/wyv2Y9vXYJwJzF6cNVuVwVOsOUj.jpg',
			id: 397567,
			genre_ids: [18, 14, 28],
			vote_count: 371,
			original_language: 'ko',
			original_title: '신과함께-죄와 벌',
			poster_path: '/gJSvIsI6oQfFim0PGyuuiCYfqKs.jpg',
			popularity: 71.44,
		},
		{
			original_language: 'ko',
			original_title: 'PMC: 더 벙커',
			poster_path: '/fl9VBbIGHUoBY6Ixzt9lEGjhxzs.jpg',
			video: false,
			vote_average: 7.3,
			overview:
				"On the day of the U.S. presidential election in 2024, a team of elite mercenaries embark on a secret CIA mission to abduct North Korea's politician in an underground bunker below the Korean Demilitarized Zone. However, they get caught in the crossfire which causes tensions to escalate to the brink of World War III.",
			release_date: '2018-12-26',
			id: 557972,
			vote_count: 71,
			adult: false,
			backdrop_path: '/4tOYcEXHXclnD1B7EpVDw4guJoH.jpg',
			title: 'Take Point',
			genre_ids: [28],
			popularity: 42.84,
		},
		{
			adult: false,
			backdrop_path: '/n0sUMqBk6BNZfFUfaA99GmMdoEq.jpg',
			genre_ids: [80, 18, 53],
			id: 11423,
			original_language: 'ko',
			original_title: '살인의 추억',
			overview:
				'1986 Gyunggi Province. The body of a young woman is found brutally raped and murdered. Two months later, a series of rapes and murders commences under similar circumstances. And in a country that had never known such crimes, the dark whispers about a serial murderer grow louder. A special task force is set up in the area, with two local detectives Park Doo-Man and Jo Young-Goo joined by a detective from Seoul who requested to be assigned to the case.',
			poster_path: '/lp3Qzzq1zzy6ToJul9DGBBd8ua1.jpg',
			release_date: '2003-05-02',
			title: 'Memories of Murder',
			video: false,
			vote_average: 8.1,
			vote_count: 2129,
			popularity: 23.262,
		},
		{
			genre_ids: [18, 14, 28],
			original_language: 'ko',
			original_title: '신과함께-인과 연',
			poster_path: '/9BnqBHFGDv3WlCPB2qQwzAWdy7y.jpg',
			video: false,
			vote_average: 8.1,
			vote_count: 210,
			overview:
				'In the afterlife, one guardian helps a man through his trials, while his two colleagues help a former guardian on earth.',
			id: 518068,
			title: 'Along with the Gods: The Last 49 Days',
			release_date: '2018-08-01',
			adult: false,
			backdrop_path: '/ul4WiN9EJxsMokdg7z4Y6iisvHS.jpg',
			popularity: 35.782,
		},
	]

	return (
		<Container fluid className='homepage'>
			<div className='homepage__intro'>
				<h2>Welcome</h2>
				<h4>Millions of movies, TV shows and people to discover</h4>
				<form style={{ display: 'flex' }}>
					<input
						type='text'
						placeholder='Begin your search here'
						className='col-lg-10'
					/>
					<button className='btn'>Search!</button>
				</form>
			</div>
			<Slider mediaArray={movieExamples} />
		</Container>
	)
}

export default HomePage
