// services/transactionService.js

import Transaction from '../model/transaction.js';

const allowedTypes = ['stake', 'borrow', 'lend'];
const allowedStatuses = ['pending', 'completed', 'failed'];

export const createTransaction = async (data) => {
    const {
        username,
        transactionType,
        token,
        amount,
        description,
        status
    } = data;

    // === Validations ===
    if (!username || typeof username !== 'string' || username.trim() === '') {
        throw new Error('Username is required and must be a non-empty string.');
    }

    if (!allowedTypes.includes(transactionType)) {
        throw new Error('Invalid transactionType. Must be stake, borrow, or lend.');
    }

    if (!token || typeof token !== 'string' || token.trim() === '') {
        throw new Error('Token is required and must be a non-empty string.');
    }

    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error('Amount must be a positive number.');
    }

    if (status && !allowedStatuses.includes(status)) {
        throw new Error('Invalid status. Must be pending, completed, or failed.');
    }

    const transaction = new Transaction({
        username: username.trim(),
        transactionType: transactionType.toLowerCase(),
        token: token.trim().toUpperCase(),
        amount,
        description: description?.trim(),
        status: status?.toLowerCase() || undefined,
    });

    return await transaction.save();
};

export const updateTransaction = async (id, updateData) => {
    const allowedTypes = ['stake', 'borrow', 'lend'];
    const allowedStatuses = ['pending', 'completed', 'failed'];

    const {
        transactionType,
        token,
        amount,
        description,
        status,
    } = updateData;

    const updateFields = {};

    if (transactionType) {
        if (!allowedTypes.includes(transactionType)) {
            throw new Error('Invalid transactionType. Must be stake, borrow, or lend.');
        }
        updateFields.transactionType = transactionType.toLowerCase();
    }

    if (token) {
        if (typeof token !== 'string' || token.trim() === '') {
            throw new Error('Token must be a non-empty string.');
        }
        updateFields.token = token.trim().toUpperCase();
    }

    if (amount !== undefined) {
        if (typeof amount !== 'number' || amount <= 0) {
            throw new Error('Amount must be a positive number.');
        }
        updateFields.amount = amount;
    }

    if (description !== undefined) {
        updateFields.description = description.trim();
    }

    if (status) {
        if (!allowedStatuses.includes(status)) {
            throw new Error('Invalid status. Must be pending, completed, or failed.');
        }
        updateFields.status = status.toLowerCase();
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(
        id, {
            $set: updateFields
        }, {
            new: true,
            runValidators: true
        }
    );

    if (!updatedTransaction) {
        throw new Error('Transaction not found.');
    }

    return updatedTransaction;
};

export const deleteTransaction = async (id) => {
    const deleted = await Transaction.findByIdAndDelete(id);

    if (!deleted) {
        throw new Error('Transaction not found or already deleted.');
    }

    return deleted;
};

export const getAllTransactions = async (transactionType) => {
    const filter = {};

    if (transactionType) {
        const allowedTypes = ['stake', 'borrow', 'lend'];
        if (!allowedTypes.includes(transactionType.toLowerCase())) {
            throw new Error('Invalid transactionType. Must be stake, borrow, or lend.');
        }
        filter.transactionType = transactionType.toLowerCase();
    }

    const transactions = await Transaction.find(filter).sort({
        createdAt: -1
    }); // most recent first
    return transactions;
};

