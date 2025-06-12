import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {product.description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> View </Button>
        
      </CardActions>
    </Card>
  );
}


//   <div key={product.id} className="border p-4 mb-4 rounded-lg shadow-md">
//           <h2>{product.name}</h2>
//           <p>{product.description}</p>
//           <Image
//   src={product.image}
//   alt="Product image"
//   width={400}
//   height={300}
//   style={{ objectFit: 'cover' }}
// />
// <button>{product.price}</button>

//         </div>
