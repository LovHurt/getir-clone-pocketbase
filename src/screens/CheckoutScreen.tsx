import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useCart } from "../context/CartContext";
import { Button, Card, TextInput } from "react-native-paper";

export default function CheckoutScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { state } = useCart();

  const onSubmit = async (data: any) => {
    console.log(data);

    const [expireMonth, expireYear] = data.cardDate.split("/");

    const paymentCard = {
      cardHolderName: data.cardHolder,
      cardNumber: data.cardNumber,
      expireMonth: expireMonth,
      expireYear: expireYear,
      cvc: data.cvc,
      registerCard: "0",
    };

    const buyer = {
      id: "BY789",
      name: data.cardHolder,
      surname: "Alican",
      gsmNumber: data.phone,
      email: "john.doe@example.com",
      identityNumber: "74300864791",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationDate: "2013-04-21 15:12:09",
      registrationAddress: "Nenehatun mah pas esenler ist",
      ip: "85.34.78.112",
      city: "istanbul",
      country: "Turkey",
      zipCode: "34222",
    };

    const shippingAddress = {
      contactName: data.cardHolder,
      city: "istanbul",
      country: "Turkey",
      address: data.address,
      zipCode: "34222",
    };

    const billingAddress = {
      contactName: data.cardHolder,
      city: "istanbul",
      country: "Turkey",
      address: data.address,
      zipCode: "34222",
    };

    const basketItems = [
      {
        id: "",
        name: "",
        category: "",
        category2: "",
        itemType: "",
        price: "",
      },
    ];

    // const paymentData = {
    //   price: "",
    //   paidPrice: "",
    //   currency: "TRY",
    //   baskedId: "",
    //   paymentCard: paymentCard,
    //   buyer: buyer,
    //   shippingAddress: shippingAddress,
    //   billingAddress: billingAddress,
    //   basketItems: basketItems,
    // };

    const paymentData = {
      price: "100.00", // Toplam sepet tutarı
      paidPrice: "100.00", // Ödenen tutar
      currency: "TRY",
      baskedId: "BASKET123", // Sepet ID'si
      paymentCard: paymentCard, // Kart bilgileri
      buyer: buyer, // Alıcı bilgileri
      shippingAddress: shippingAddress, // Gönderim adresi
      billingAddress: billingAddress, // Fatura adresi
      basketItems: [
        {
          id: "ITEM123", // Ürün ID'si
          name: "Sample Product", // Ürün adı
          category1: "Electronics", // Zorunlu: basketItemCategory1
          category2: "Mobile", // Opsiyonel: basketItemCategory2
          itemType: "PHYSICAL", // PHYSICAL veya DIGITAL
          price: "100.00", // Ürün fiyatı
        },
      ],
    };

    try {
      const response = await fetch(
        "https://busy-lizard-sound.ngrok-free.app/api/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error : any) {
      console.log("errorrr : ", error.message);
      alert("something went wrong");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View className="flex flex-row justify-center mb-4 gap-4">
        <Text className="text-xl font-semibold">Toplam</Text>
        <Text className="text-xl font-semibold">
          {state.total} {"\u20BA"}
        </Text>
      </View>
      <Card className="p-4 bg-white">
        <Card.Title title="Enter your info" />
        <Card.Content>
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Name Surname"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.name}
                mode="outlined"
                className="mb-4"
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text className="text-red-500 font-semibold">
              {errors.name.message}
            </Text>
          )}
          {/* ADDRESS */}
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.address}
                mode="outlined"
                className="mb-4"
              />
            )}
            name="address"
          />
          {errors.name && (
            <Text className="text-red-500 font-semibold">
              {errors.address.message}
            </Text>
          )}
          {/* TELEPHONE */}
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Phone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.phone}
                mode="outlined"
                className="mb-4"
                keyboardType="phone-pad"
              />
            )}
            name="phone"
          />
          {errors.name && (
            <Text className="text-red-500 font-semibold">
              {errors.phone.message}
            </Text>
          )}
          {/* CARD HOLDER */}
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Card Holder Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.cardHolder}
                mode="outlined"
                className="mb-4"
              />
            )}
            name="cardHolder"
          />
          {errors.name && (
            <Text className="text-red-500 font-semibold">
              {errors.cardHolder.message}
            </Text>
          )}
          {/* CARD NUMBER */}
          <Controller
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Card Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.cardNumber}
                mode="outlined"
                className="mb-4"
                keyboardType="phone-pad"
              />
            )}
            name="cardNumber"
          />
          {errors.name && (
            <Text className="text-red-500 font-semibold">
              {errors.cardNumber.message}
            </Text>
          )}
          <View className="flex flex-row gap-2">
            <View className="w-1/2">
              {/* CARD DATE */}
              <Controller
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="Card Date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.cardDate}
                    mode="outlined"
                    className="mb-4"
                  />
                )}
                name="cardDate"
              />
              {errors.name && (
                <Text className="text-red-500 font-semibold">
                  {errors.cardDate.message}
                </Text>
              )}
            </View>
            <View className="w-1/2">
              {/* CARD CVC */}

              <Controller
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label="CVC"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    error={errors.cvc}
                    mode="outlined"
                    className="mb-4"
                  />
                )}
                name="cvc"
              />
              {errors.name && (
                <Text className="text-red-500 font-semibold">
                  {errors.cvc.message}
                </Text>
              )}
            </View>
          </View>

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            className="mt-4"
          >
            Pay
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
});
