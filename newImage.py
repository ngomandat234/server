import zmq
context = zmq.Context()
socket = context.socket(zmq.REQ)
port = "5555"
socket.connect("tcp://localhost:%s" % port)

for i in range (1,10):
    socket.send_string("say hello")
    message = socket.recv()
    print("Received reply from server:", mess