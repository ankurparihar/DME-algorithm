#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <queue>
#include <string>
#include <iostream>
using namespace std;
 
struct Node {
    public:
        int ID;
        bool USING;
        bool ASKED;
        Node* HOLDER;
        queue<Node*> REQUEST_Q;
 
        void ASSIGN_PRIVILEGE() {
            if(HOLDER==this && !USING && !REQUEST_Q.empty()) {
                HOLDER = REQUEST_Q.front();
                REQUEST_Q.pop();
                ASKED = false;
                if(HOLDER==this) {
                    USING = true;
                    // start executing its critical section
                    execute();
                }
                else {
                    HOLDER->HANDLE_EVENT("privilege", NULL);
                }
            }
        }
 
        void MAKE_REQUEST() {
            if(HOLDER!=this && !REQUEST_Q.empty() && !ASKED) {
                ASKED = true;
                HOLDER->HANDLE_EVENT("request", this);
            }
        }
 
        void execute() {
            // creating child process to handle CS
            // pid_t pid = fork();
            // if(pid==0){
            //     /* child process */
            //     // do CS;
            //     // sleep(5000);
            //     cout<<"I am (id): "<<ID<<endl;
            //     HANDLE_EVENT("exit critical section", NULL);
            //     execlp("/bin/ls","ls", NULL);
            // }
            // else{
            //     wait(NULL);
            // }
        	cout<<ID<<" has been executed"<<endl;
        }
 
    public:
        // << Constructor >>
        Node(int id, Node* current_dir){
            ID = id;
            USING = false;
            ASKED = false;
            HOLDER = current_dir;
        }

        void HANDLE_EVENT(string message, Node* sender) {
            if(message=="enter critical section") {
                REQUEST_Q.push(this);
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="request") {
                REQUEST_Q.push(sender);
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="privilege") {
                HOLDER = this;
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
            if(message=="exit critical section") {
                USING = false;
                ASSIGN_PRIVILEGE();
                MAKE_REQUEST();
            }
        }
};