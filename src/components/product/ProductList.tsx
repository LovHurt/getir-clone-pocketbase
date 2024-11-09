import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductProps } from "../../../types";
import { products } from "../../data/products";
import { subcategories } from "../../data/subcategories";
import ProductItem from "./ProductItem";

interface ProductListProps {
  categoryId: string;
  subCategoryId: string | null;
}

export default function ProductList({
  categoryId,
  subCategoryId,
}: ProductListProps) {
    const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
    const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      let filtered = products;

      if (subCategoryId) {
        filtered = products.filter(
          (product) => product.subcategoryId === subCategoryId
        );
      } else {
        const relevantSubcategories = subcategories
          .filter((sub) => sub.categoryId === categoryId)
          .map((sub) => sub.id);

        filtered = products.filter((product) =>
          relevantSubcategories.includes(product.subcategoryId)
        );
      }

      setFilteredProducts(filtered);
    } catch (err) {
      setError("Ürünler yüklenirken bir hata oluştu.");
      console.error(err);
    }
  }, [categoryId, subCategoryId]);

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <View style={styles.center}>
        <Text>Hiç ürün bulunamadı.</Text>
      </View>
    );
}

  return (
     <FlatList
      data={filteredProducts}
      className="flex mb-20"
      numColumns={3}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem product={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
}


const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      padding: 10,
      marginVertical: 5,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 2, // Android için gölge
      shadowColor: "#000", // iOS için gölge
      shadowOffset: { width: 0, height: 2 }, // iOS gölge ayarı
      shadowOpacity: 0.1, // iOS gölge ayarı
      shadowRadius: 4, // iOS gölge ayarı
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 8,
      marginRight: 10,
    },
    details: {
      justifyContent: "center",
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: "bold",
    },
    price: {
      fontSize: 14,
      color: "#e74c3c",
      marginTop: 4,
    },
    originalPrice: {
      fontSize: 12,
      color: "#7f8c8d",
      textDecorationLine: "line-through",
    },
    listContainer: {
      padding: 10,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    errorText: {
      color: "red",
      fontSize: 16,
    },
  });