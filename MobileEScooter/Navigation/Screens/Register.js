import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    // Check if input is a valid email address
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };
  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("password not confirmed");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleLogin = () => {
    if (validateEmail() && validatePassword()) {
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.headText}>Become One of Us</Text>
        {/* <Text style={styles.logo}>Logo</Text> */}
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.input, emailError && styles.errorInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Password confirmation"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  logoContainer: {
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  formContainer: {
    height: "70%",
    justifyContent: "center",
    marginHorizontal: 22,
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  headText: {
    fontSize: 24,
  },
  button: {
    backgroundColor: "#333",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
