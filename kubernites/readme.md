Kubernetis for scale FASTER AND BEYOND AWS AUTOSCALING


Minikube is a way to let you get invovled.



Object:

- JSON or YAML
- Yaml recommended
- defines object as a file




Pod: App is a pod.

- Atomic app unit container: 
- They can share a port space
- can share docker volume
- Pod is the idea of things talking to each other in localhost. Pods ephemeral.
- Kubernetis can decide to kill pod at any time based on network node or a hardware failure and bring it up on a way to not depend on normal state to come back up functioning.
- Nodes are the working machine that run and deploy. That's the beefy hardware that does the grunt work.
- Distributed replicas are the advantage. Physical notes hopefully distributed geographically across the zones you try to support. Replicas are a replica of the pod. Duplicated across nodes. High availability. If a single node crashes for any hardware/network reason, the replicas keep it going. Customers face no interruption of service.
- Pods have health and readiness checks. You can configure them and query them to get useful information.
- Kubernetis will redeploy crashed pods across different areas.












NODES

- Worker machine or VM
- Runs pods. 

Runs Kubelet which
- Talks to the docker api. 
- Does the dirty work too.

-Kubelet is where you debug.

How to distribute load evenly and effectively across the nodes. Kubernetis lets a system cognizant of resources necessary actually handle it. Kubernetis does it automatically.

- More nodes give you more power. If you get hit with a huge ad campaing and kant handle it. Install kubelet in other machines, and kubelet will redistribute pods across physical nodes to create an efficient workload for the application.

- 0 Downtime updates. 
- Update the image too: When you tell kubernetis that you want to update the app image in the cluster, it will spin up new pods running the new software (behind a load balancer) and it will run down the old pods. Users won't notice what happens. a seamless experience.


Kubernetis groups related infrastructure across physical nodes.



Master

- State manipulator
- Current state - desired state = do that.
  - Node crash
  - Pod crash
  - App update.
New pods will be spun up to compensate for the failures.

Can run multiple masters, leader election, lots of fault tolerance to handle issues.



Master components:

- api server
- etcd : distributed data storage
- controller-manager: determines what steps need to be taken to take from current to desired state.
- Scheduler handles what is the appropate state.





Minikube:

- One master, one node, local setup.
- Spin up as many nodes as you want. Gives you the ability to deploy into cluster right out of the box.



Over view
- install kubectl
- install docker
- install minikube
- review app code
review kubernets obj
create app container
deploy app to cluster
update app.

For kubernets help, query the status of those things using kubectl


kubernetes services run inside the cluster






in the kubernetes deployment file, you can increase the number of replicas to handle more.

THey may already by pods in the cluster with the label app:

so if you want to target the pods based on specific rules while making new rules, you can set up something to address the specific details.

spec lets you put the docker image in the repository.


under spec, the type, you want to put a load balancer




