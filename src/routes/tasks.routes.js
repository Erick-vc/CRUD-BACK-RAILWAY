import { Router } from 'express';

import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '../controllers/tasks.controllers.js'

const router = Router();

// ? Solictar todo los clientes
router.get('/customers', getCustomers);

// ? Solicitar un cliente
router.get('/customers/:id', getCustomer);

// ? Registrar un cliente
router.post('/customers', createCustomer);

// ? Editar un cliente
router.put('/customers/:id', updateCustomer);

// ? Eliminar un cliente
router.delete('/customers/:id', deleteCustomer);

export default router;