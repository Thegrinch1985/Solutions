#include<iostream>
#include <string>
#include <stdio.h>
#include <stdlib.h>
#include <iomanip>
#include <algorithm>
#include <fstream>
#include "main.h"
using namespace std;



int main()
{
	int arr[10];
	int MAX_ARRAY_SIZE = 5;
	int number;
	int overall = 0, largest = 0; 
	int smallest = 10;
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		cout << "Please enter The " << (i+1) << " integer" << "\n";
		cin >> arr[i];
	}
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		//cout << "Please enter The " << (i + 1) << " integer" << "\n";
		//cin >> arr[i];
		cout << arr[i] << " ,";
	}
	cout << "Please choose a number and see if it is in the array\n";
	cin >> number;
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {

		if (arr[i] == number)
		{
			cout << "The number exixts, it is in the position " << arr[i] << "\n";
		}
		
		//cout << arr[i] << " ,";
	}
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		overall += arr[i];

	}
	for (int i = 0; i < MAX_ARRAY_SIZE; i++) {
		//overall += arr[i];

		if (arr[i] > largest)
		{
			largest= arr[i];
		}
		if (arr[i] < smallest)
		{
			smallest = arr[i];
		}


	}
	cout << largest << "\n";
	cout << smallest << "\n";
	cout << "Total " << overall;

	system("pause");
}