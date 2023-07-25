import React from 'react';
import { Box, Typography, Dialog, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Dish } from 'models/meals/interfaces';

interface RecipeProps {
  dish: Dish;
  open: boolean;
  handleClose: () => void;
}

const Recipe = ({ dish, open, handleClose }: RecipeProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <IconButton
        sx={{ position: 'absolute', right: 8, top: 8 }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ m: 3, minWidth: 300, maxHeight: '75rem' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          {dish.name}
        </Typography>
        <Typography variant='body1'>{dish.description}</Typography>

        <Typography variant='h6' sx={{ fontWeight: 'bold', mt: '2rem' }}>
          Ingredients
        </Typography>
        {dish.recipe.ingredients.map((ingredient) => (
          <Typography variant='body1' sx={{ mb: '0.25rem' }}>
            {`\u2022  ${ingredient.name} - ${ingredient.amount}`}
          </Typography>
        ))}

        <Typography variant='h6' sx={{ fontWeight: 'bold', mt: '2rem' }}>
          Instructions
        </Typography>
        {dish.recipe.instructions.map((instruction, index) => (
          <Typography variant='body1' sx={{ mb: '0.25rem' }}>
            {`${index + 1}. ${instruction}`}
          </Typography>
        ))}
      </Box>
    </Dialog>
  );
};

export default Recipe;
