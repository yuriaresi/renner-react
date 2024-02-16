import { createSlice } from "@reduxjs/toolkit";
import { Produto } from "../../models/produtos.model";

const initialState: Produto[] = [
    {
        id: 1,
        nome: "Tenis da Nike",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4eNvQp1NbyzzNfLWBPzJDVIuDB8SjEM3fw&usqp=CAU"
    },
    {
        id: 2,
        nome: "Tenis da Adidas",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2jU5dIQevYg3Y3XN4EH_5BI2bI9r3omRig&usqp=CAU"
    },
    {
        id: 3,
        nome: "Tenis da Adidas",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2jU5dIQevYg3Y3XN4EH_5BI2bI9r3omRig&usqp=CAU"
    },
    {
        id: 4,
        nome: "Tenis da Adidas",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2jU5dIQevYg3Y3XN4EH_5BI2bI9r3omRig&usqp=CAU"
    },
     {
        id: 5,
        nome: "Tenis da Nike",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4eNvQp1NbyzzNfLWBPzJDVIuDB8SjEM3fw&usqp=CAU"
    },
    {
        id: 6,
        nome: "Tenis da Nike",
        valor: 299.90,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4eNvQp1NbyzzNfLWBPzJDVIuDB8SjEM3fw&usqp=CAU"
    }
]

const produtosSlice = createSlice({
    name: "produto",
    initialState: initialState as Produto[],
    reducers: {}
})


export default produtosSlice.reducer