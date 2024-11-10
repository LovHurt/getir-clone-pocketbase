import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import { ProductProps } from "../../types";
import ProductItem from "../components/product/ProductItem";
import { products } from "../data/products";
import debounce from 'lodash.debounce';

const SearchScreen = () => {
  const [query, setQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setLoading(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      debouncedSearch(value);
    }, 500);
  };

  const performSearch = (searchQuery: string) => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setError(null);
      setLoading(false);
      return;
    }

    setError(null);

    try {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredProducts(results);
    } catch (err) {
      setError("Error occured while loading");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useRef(debounce(performSearch, 500)).current;


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Search for products..."
        value={query}
        onChangeText={handleQueryChange}
        className="border border-slate-300 p-3"
        style={{
          borderWidth: 1,
          borderColor: "#cbd5e1",
          padding: 12,
          borderRadius: 8,
          marginBottom: 16,
        }}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ marginBottom: 16 }}
        />
      )}

      {error && <Text style={{ color: "red", marginBottom: 16 }}>{error}</Text>}

      {!loading &&
        !error &&
        filteredProducts.length === 0 &&
        query.trim() !== "" && (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Product can not be found.
          </Text>
        )}

      <FlatList
        data={filteredProducts}
        className="flex mb-20"
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
        ListEmptyComponent={
          !loading && query.trim() === "" ? (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Enter the product name{" "}
            </Text>
          ) : null
        }
      />
    </View>
  );
};

export default SearchScreen;
