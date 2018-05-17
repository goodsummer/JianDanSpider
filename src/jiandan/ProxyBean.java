package jiandan;

public class ProxyBean {
	private int port;
	private String ip;
	
	ProxyBean(String ip, int port) {
		this.setPort(port);
		this.setIp(ip);
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public int getPort() {
		return port;
	}

	public void setPort(int port) {
		this.port = port;
	}
}
