import React, {createContext,useState} from 'react';
import Books from '../data';

export const Appcontext = createContext();

const AppProvider = ({children})=>{
    const [data]=useState(Books);
    const Bookslist = data;
    const Nowtrending = data.filter(book=>book.trending === true);
    const BestSellers = data.filter(book=>book.bestseller === true);
    const NewArrival = data.filter(book=>book.newarraivals === true);
    const Intbstsellers = data.filter(book=>book.intseller === true);
    const Awardwinners = data.filter(book=>book.awardwinner === true);
    const FeaturedAuthors = data.filter(book=>book.featuredauthor === true);

    const Roy =data.filter(book=>book.author === "Arundhati Roy");
    const Coonts =data.filter(book=>book.author === "Stephen Coonts");
    const King =data.filter(book=>book.author === "Stephen King");
    const Green =data.filter(book=>book.author === "John Green");
    const Flyn =data.filter(book=>book.author === "GILLIAN FLYNN");
    const Forman =data.filter(book=>book.author === "GAYLE FORMAN");



    const [commonvault,updCommonvault] = useState([]);// make seperate usestate for each categories

    const [rangeList,updrangeList] = useState(null);//to move rangefn works
    const [searchresult,updSearchresult]=useState([]);

    //To make Range fn works properly


    const [bookcart,updBookcart]=useState([]);
   
    
    return(
        <Appcontext.Provider value={{
                Bookslist,Nowtrending,BestSellers,NewArrival,Intbstsellers,Awardwinners,FeaturedAuthors,
                commonvault,updCommonvault,
                rangeList,updrangeList,
                Roy,Coonts,King,Green,Flyn,Forman,
                bookcart,updBookcart,
                searchresult,updSearchresult,
                
        }}>
            {children}
        </Appcontext.Provider>
    )
    
}
export default AppProvider;