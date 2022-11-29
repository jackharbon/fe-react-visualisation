import { Avatar, Grid, styled, Box, Paper, Button, Typography, Modal } from '@mui/material';
import { useEffect, useState } from 'react';

function Pokemons() {
	const [pokemonMap, setPokemonMap] = useState([]);

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	}));

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
			.then((response) => response.json())
			.then((allPokemon) => {
				const pokemonMap = allPokemon.results.map((e, index) => {
					return e.url.slice(0, -1).substring(e.url.slice(0, -1).lastIndexOf('/') + 1);
				});

				setPokemonMap(pokemonMap);
			});
	}, []);

	function ImageExist(url) {
		var img = new Image();
		img.src = url;
		return img.height !== 0;
	}

	return (
		<Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Grid container spacing={2}>
				{pokemonMap.map((pokemonId) => {
					if (ImageExist(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`)) {
						return (
							<div>
								<Grid item xs='auto' key={pokemonId}>
									<Item>
										<Avatar
											className='Avatar'
											alt={`${pokemonId}`}
											src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
											sx={{ width: 140, height: 140 }}
										/>
									</Item>
									<Button onClick={handleOpen}>Pokemon Id: {pokemonId}</Button>
									<Modal
										open={open}
										onClose={handleClose}
										aria-labelledby='modal-modal-title'
										aria-describedby='modal-modal-description'>
										<Box sx={style}>
											<Typography id='modal-modal-title' variant='h6' component='h2'>
												Pokemon Id: {pokemonId}
											</Typography>
											<Typography id='modal-modal-description' sx={{ mt: 2 }}>
												Pokemon details
											</Typography>
										</Box>
									</Modal>
								</Grid>
							</div>
						);
					} else {
						return (
							<Grid item xs='auto' key={pokemonId}>
								<Item>
									<Avatar
										className='Avatar'
										alt={`${pokemonId}`}
										src={`https://img.icons8.com/ios/512/no-camera.png`}
										sx={{ width: 120, height: 120 }}
									/>
								</Item>
							</Grid>
						);
					}
				})}
			</Grid>
		</Box>
	);
}

// https://pokeapi.co/api/v2/pokemon/:pokemon_id

export default Pokemons;
