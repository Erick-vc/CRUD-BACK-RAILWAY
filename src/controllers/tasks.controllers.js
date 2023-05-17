import { pool } from "../../db.js";

// ? Mostrar todas las tareas
export const getCustomers = async (req, res) => {
  // res.send("Mostrar tareas");
  try {
    const [result] = await pool.query(
      "SELECT * FROM customer ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// ? Mostrar solo un cliente
export const getCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      `SELECT * FROM customer WHERE id = ${id}`
    );
    if (result.length === 0) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ? Crear un cliente
export const createCustomer = async (req, res) => {
  try {
    const { name, last_name, email } = req.body;
    const [result] = await pool.query(
      "INSERT INTO customer(name, last_name, email) VALUES (?, ?, ?)",
      [name, last_name, email]
    );
    res.json({
      id: result.insertId,
      name,
      last_name,
      email,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// ? Editar un cliente
export const updateCustomer = async (req, res) => {
  try {
    const result = await pool.query("UPDATE customer SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ? Eliminar un cliente
export const deleteCustomer = async (req, res) => {
  try {
    const {id} = req.params;
    const [result] = await pool.query(`DELETE FROM customer WHERE id = ${id}`)
    if(result.affectedRows === 0) {
      return res.status(404).json({message: "Client not found"});
    } else {
      return res.send('Eliminado')
    }
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};
