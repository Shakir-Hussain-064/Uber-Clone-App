# Backend API  Documentation

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
- All required fields must be provided and meet validation