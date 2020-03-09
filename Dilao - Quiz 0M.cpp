#include <iostream>
#include <cstring>
#include <bits/stdc++.h>
using namespace std;
class Quiz1M{
	public:
	int kita=0;
	size_t found;
	size_t found2;
	
	int search(string inp1, string inp2,string search){
	     found = inp1.find(search);
		if(found!=string::npos){
			kita=kita+1;
		}
		 found2 = inp2.find(search);
		if(found2!=string::npos){
			kita=kita+2;
		}
		return kita;
	}

};
class sorts: public Quiz1M{
	public:
	string input;
	
	string sorted(string inp1, string inp2){
		    input=inp1+inp2;
			sort(input.begin(),input.end());
			return input;
	}
};

int main(int argc, char** argv) {		
	string input1; string input2;string search;
	cin>>input1;cin>>input2;cin>>search;
	sorts con;
	int n=con.search(input1,input2,search);
	if(n==3){
		cout<<"Output: "<<input1<<" + "<<input2<<" both string has a pattern of "<<search<<"."<<endl;	
		cout<<"Concatenated Sorted Characters: "<<con.sorted(input1,input2);
	}else if(n==0){
		cout<<"Output: "<<input1<<" + "<<input2<<" one of the string has no pattern of "<<search<<"."<<endl;
		cout<<"Concatenated Characters: "<<input1+input2;
	}else if(n==1 || n==2){
		cout<<"Output: "<<input1<<" + "<<input2<<" one of the string has a pattern of "<<search<<"."<<endl;
		cout<<"Concatenated Sorted Characters: "<<con.sorted(input1,input2);
		}
	return 0;
}
