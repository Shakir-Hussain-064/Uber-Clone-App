# Backend API Documentation

## POST `/users/register`

Registers a new user in the system.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**
- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **201 Created**
- **Description:** User registered successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
      // other user fields...
    }
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed (e.g., missing fields, invalid email, password too short).
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

---

### **Example Request**

```bash
curl -X POST http://localhost:PORT/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }'
```

---

### **Notes**
- The endpoint returns a JWT token for authentication.
- All required fields must be provided and meet validation.

---

## POST `/users/login`

Authenticates a user and returns a JWT token.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **200 OK**
- **Description:** User authenticated successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
      // other user fields...
    }
  }
  ```

#### **401 Unauthorized**
- **Description:** Invalid email or password.
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed (e.g., missing fields, invalid email, password too short).
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

---

### **Example Request**

```bash
curl -X POST http://localhost:PORT/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }'
```

---

### **Notes**
- The endpoint returns a JWT token for authentication.
- Ensure the email and password are correct to avoid authentication errors.

---

## GET `/users/profile`

Fetches the profile of the authenticated user.

---

### **Headers**

- `Authorization` (string, required): Bearer token for authentication.

---

### **Responses**

#### **200 OK**
- **Description:** User profile fetched successfully.
- **Body:**
  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
    // other user fields...
  }
  ```

#### **401 Unauthorized**
- **Description:** User is not authenticated.
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### **Example Request**

```bash
curl -X GET http://localhost:PORT/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

---

### **Notes**
- Ensure the token is valid and not expired.

---

## GET `/users/logout`

Logs out the authenticated user by invalidating the token.

---

### **Headers**

- `Authorization` (string, required): Bearer token for authentication.

---

### **Responses**

#### **200 OK**
- **Description:** User logged out successfully.
- **Body:**
  ```json
  {
    "message": "Logged Out"
  }
  ```

#### **401 Unauthorized**
- **Description:** User is not authenticated.
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### **Example Request**

```bash
curl -X GET http://localhost:PORT/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

---

### **Notes**
- Ensure the token is valid and not expired.
- The token will be added to a blacklist to prevent further use.

---

## POST `/captains/register`

Registers a new captain in the system.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "yourpassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### **Field Requirements**
- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.
- `vehicle.color` (string, required): Minimum 3 characters.
- `vehicle.plate` (string, required): Minimum 6 characters, must be unique.
- `vehicle.capacity` (integer, required): Must be at least 1.
- `vehicle.vehicleType` (string, required): Must be one of `car`, `bike`, or `auto`.

---

### **Responses**

#### **201 Created**
- **Description:** Captain registered successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // other captain fields...
    }
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed (e.g., missing fields, invalid email, password too short).
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

---

### **Example Request**

```bash
curl -X POST http://localhost:PORT/captains/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "email": "johndoe@example.com",
    "password": "yourpassword",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }'
```

---

### **Notes**
- The endpoint returns a JWT token for authentication.
- All required fields must be provided and meet validation.
- Ensure the vehicle plate is unique to avoid conflicts.

---