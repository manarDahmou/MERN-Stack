
// import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
// import { Link, useSearchParams } from 'react-router-dom';

// import { categories } from '../../constants/data';

// const StyledTable = styled(Table)`
//     border: 1px solid rgba(224, 224, 224, 1);
// `;
    
// const StyledButton = styled(Button)`
//     margin: 20px;
//     width: 85%;
//     background: #6495ED;
//     color: #fff;
//     text-decoration: none;
// `;
    
// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;

// const Categories = () => {
//     const [searchParams] = useSearchParams();
//     const category = searchParams.get('category');
    
//     return (
//         <>
//             <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
//                 <StyledButton variant="contained">Create Blog</StyledButton>
//             </Link>
            
//             <StyledTable>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>
//                             <StyledLink to={"/"}>
//                                 All Categories
//                             </StyledLink>
//                         </TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {
//                         categories.map(category => (
//                             <TableRow key={category.id}>
//                                 <TableCell>
//                                     <StyledLink to={`/?category=${category.type}`}>
//                                         {category.type}
//                                     </StyledLink>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </StyledTable>
//         </>
//     )
// }

// export default Categories;
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { categories } from '../../constants/data';

// Style customisé pour la table
const StyledTable = styled(Table)(({ theme }) => ({
    border: '1px solid rgba(224, 224, 224, 1)',
    marginTop: theme.spacing(2),
    boxShadow: theme.shadows[1],
}));

// Style customisé pour les boutons
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0),
    width: '85%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

// Style pour les liens
const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const Categories = () => {
    const [searchParams] = useSearchParams();
    const currentCategory = searchParams.get('category');

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            {/* Bouton pour créer un nouveau blog */}
            <StyledLink to={`/create?category=${currentCategory || ''}`}>
                <StyledButton variant="contained">Create Blog</StyledButton>
            </StyledLink>

            {/* Table des catégories */}
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={1} style={{ fontWeight: 'bold', fontSize: '16px' }}>
                            Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* Catégorie "All" */}
                    <TableRow>
                        <TableCell align="center">
                            <StyledLink to="/">All Categories</StyledLink>
                        </TableCell>
                    </TableRow>

                    {/* Liste des catégories */}
                    {categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell align="center">
                                <StyledLink to={`/?category=${category.type}`}>
                                    {category.type}
                                </StyledLink>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </div>
    );
};

export default Categories;
