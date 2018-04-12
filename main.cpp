#include <iostream>
#include <fstream>
#include <cstdio>
#include <stdlib.h>
#include "Node.cpp"

using namespace std;

int main(int argc, char* argv[])
{
    // input format validation
    if(argc!=3){
        printf("Usage: ./main <inputfile> nodeCount\n");
        return 0;
    }

    // local variables
    int i;

    // creating Nodes
    int nodeCount = atoi(argv[2]);
    Node* Node_Array[nodeCount];

    // create tree structure from nodes
    Node_Array[0] = new Node(0, NULL);
    Node_Array[0]->HANDLE_EVENT("privilege", NULL);
    for(i=1; i<nodeCount-1; i+=2){
        Node_Array[i] = new Node(i, Node_Array[i/2]);
        Node_Array[i+1] = new Node(i+1, Node_Array[i/2]);
    }
    if((nodeCount&1)==0) Node_Array[i] = new Node(i, Node_Array[i/2]);
    
    //input processing from text file
    ifstream file(argv[1]);             // pass file name as argument
    ofstream log;                       // log file
    log.open("log.txt", fstream::app);  // open log file in append mode
    int linebuffer;                     // input integer node number

    while(file>>linebuffer){
        /* input checking and error handling*/
        if(linebuffer >= 0 && linebuffer < nodeCount){

            log<<"Node "<<linebuffer<<" wants to enter critical section"<<endl;
                Node_Array[linebuffer]->HANDLE_EVENT("enter critical section", NULL);
        }
    }
    log.close();
}