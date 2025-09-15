import prisma from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";
export async function buyShares(userId, businessId, quantity) {
  console.log("quantuitng coming in function", quantity);
  console.log("wow this is user id *****", userId);
  
  
  try {

    return await prisma.$transaction(async (tx) => {
    // 1. Fetch business
    const business = await tx.business.findUnique({
      where: { id: businessId },
      select: { totalShares: true, sharePrice: true },
    });

  //  console.log("business inspection hahhahaha", business);
    

    if (!business) throw new Error("Business not found");
    if (!business.totalShares || business.totalShares < quantity) {
      throw new Error("Not enough shares available");
    }

    // 2. Deduct shares from business
    await tx.business.update({
      where: { id: businessId },
      data: { totalShares: { decrement: quantity } },
    });

    


    // test
    

    // 3. Ensure user portfolio exists
    const portfolio = await tx.portfolio.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });

    // 4. Create/Update Share in portfolio
    const share = await tx.share.upsert({
      where: {
        // unique constraint needed in schema:
        // @@unique([portfolioId, businessId])
        portfolioId_businessId: { portfolioId: portfolio.id, businessId },
      },
      update: { quantity: { increment: quantity } },
      create: {
        businessId,
        portfolioId: portfolio.id,
        priceAtBuy: business.sharePrice ?? 0,
        quantity,
      },
    });

    // 5. Update portfolio total value
    await tx.portfolio.update({
      where: { id: portfolio.id },
      data: {
        totalValue: { increment: (business.sharePrice ?? 0) * quantity },
      },
    });

    // 6. Record the transaction
    const txn = await tx.transaction.create({
      data: {
        userId,
        businessId,
        shareId: share.id,
        type: "BUY",
        quantity,
        price: business.sharePrice ?? 0,
        status: "SUCCESS",
      },
    });

    return { success: true, transaction: txn };
  });
  } catch (error) {
    console.error("Failed to submit");
    throw error;
    
  }
}
