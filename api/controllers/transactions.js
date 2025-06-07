import {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAllTransactions
} from '../services/transactionService.js';

export const getAll = async (req, res) => {
    try {
        const {
            transactionType
        } = req.query;
        const transactions = await getAllTransactions(transactionType);
        return res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        return res.status(400).json({
            error: error.message
        });
    }
};

export const create = async (req, res) => {
    try {
        const newTransaction = await createTransaction(req.body);
        return res.status(201).json(newTransaction);
    } catch (error) {
        console.error('Error in create controller:', error.message);
        return res.status(400).json({
            error: error.message
        });
    }
};
export const update = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const updated = await updateTransaction(id, req.body);
        return res.status(200).json(updated);
    } catch (error) {
        console.error('Error updating transaction:', error.message);
        return res.status(400).json({
            error: error.message
        });
    }
};

export const remove = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deleted = await deleteTransaction(id);
        return res.status(200).json({
            message: 'Transaction deleted successfully.',
            id: deleted._id,
        });
    } catch (error) {
        console.error('Error deleting transaction:', error.message);
        return res.status(400).json({
            error: error.message
        });
    }
};