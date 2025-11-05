import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { assets } from '../../assets/assets/assets';

const cards = [
    {
        id: 1,
        title: 'Places',
        description: 'Suggest some beautiful places to see on an upcoming roadtrip.',
        icon: assets.compass_icon,
    },
    {
        id: 2,
        title: 'Concept',
        description: 'Briefly summarize the concept of urban planning.',
        icon: assets.bulb_icon,
    },
    {
        id: 3,
        title: 'Humans',
        description: 'Brainstorm team bonding activities for our work retreat.',
        icon: assets.message_icon,
    },
    {
        id: 4,
        title: 'Nature',
        description: 'Humans depend on plants and animals for survival.',
        icon: assets.code_icon,
    },
];

function SelectActionCard() {
    const [selectedCard, setSelectedCard] = React.useState(null);

    return (
        <div className="w-full">
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 3,
                    marginLeft: '80px',
                    padding: '20px',
                }}
            >
                {cards.map((card, index) => (
                    <Card
                        key={card.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 3,
                            boxShadow: 2,
                            '&:hover': { boxShadow: 5 },
                            transition: '0.3s',
                        }}
                    >
                        <CardActionArea
                            onClick={() => setSelectedCard(index)}
                            sx={{
                                height: '100%',
                                width: '100%',
                                p: 2,
                                '&[data-active]': {
                                    backgroundColor: 'action.selected',
                                },
                            }}
                            data-active={selectedCard === index ? '' : undefined}
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    style={{ width: 40, height: 40, marginBottom: 10 }}
                                />
                                <Typography variant="h6" component="div" gutterBottom>
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </div>
    );
}

export default SelectActionCard;
