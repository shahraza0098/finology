import  prisma  from "@/lib/prisma";

export async function GET() {
  try {
    const [
      totalBusinesses,
      completedBusinesses,
      totalInvestors,
      totalTransactions,
      totalReviews,
      approvedReviews,
      avgRating,
      totalInvestment,
      activeShares,
      listedShares,
    ] = await Promise.all([
      prisma.business.count(),
      prisma.business.count({ where: { isFormCompleted: true } }),
      prisma.user.count(),
      prisma.transaction.count(),
      prisma.review.count(),
      prisma.review.count({ where: { status: "APPROVED" } }),
      prisma.review.aggregate({ _avg: { rating: true } }),
      prisma.transaction.aggregate({
        _sum: { price: true },
        where: { type: "BUY" },
      }),
      prisma.share.count({ where: { status: "OWNED" } }),
      prisma.share.count({ where: { isListedForSale: true } }),
    ]);

    const data = {
      totalBusinesses,
      completedBusinesses,
      totalInvestors,
      totalTransactions,
      totalReviews,
      approvedReviews,
      avgRating: avgRating._avg.rating || 0,
      totalInvestment: totalInvestment._sum.price || 0,
      activeShares,
      listedShares,
    };

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Error fetching dashboard metrics:", error);
    return Response.json({ success: false, message: "Failed to fetch metrics" }, { status: 500 });
  }
}
