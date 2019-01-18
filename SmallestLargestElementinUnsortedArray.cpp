//Given an array and a number k where k 
//is smaller than size of array,
//we need to find the k’th smallest element in the given array.
//It is given that ll array elements are distinct.


#include <iostream>
#include <algorithm>

using namespace std;
int kthSmallest(int arr[], int n, int k)
{
	//Sort the Array
	sort(arr, arr + n);

	//return k'th element in the sorted array

	return arr[k - 1];
}

int kthLargest(int arr[], int n)
{
	//sorted the Array 
	sort(arr, arr + n);

	//Return k'th element in the orted array
	return arr[sizeof(arr) - 1];


}

int main()
{ 
	int arr[] = { 69, 142, 35 ,475,876, 1029, 54, 67 , 485, 75, 234, 34, 98 };

	int n = sizeof(arr) / sizeof(arr[0]), k = 2;
	
	cout << "K'th smallest element is " << kthSmallest(arr, n, k) << " ";

	cout << "K'th largest element is " << kthLargest(arr, n) << " ";


	system("pause");
}
