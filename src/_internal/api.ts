import mockData from "./dataset";

type GetItemResponse = {
  items: any[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
  };
};

export async function getItems({
  page = 1,
  pageSize = 10,
} = {}): Promise<GetItemResponse> {
  if (page < 1 || pageSize < 1) {
    throw new Error("Both page and pageSize must be positive integers");
  }

  return new Promise((resolve) => {
    // Calculate start/end indices for pagination
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Create paginated slice
    const paginatedItems = mockData.slice(startIndex, endIndex);

    // Calculate pagination metadata
    const totalItems = mockData.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // Simulate network latency (100-500ms)
    const timeout = Math.floor(Math.random() * 401) + 100;

    setTimeout(() => {
      resolve({
        items: paginatedItems,
        pagination: {
          currentPage: page,
          pageSize,
          totalItems,
          totalPages,
          hasNextPage: endIndex < totalItems,
        },
      });
    }, timeout);
  });
}
