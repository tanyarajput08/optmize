import {
  useEffect,
  useState
} from "react";

import DashboardLayout from
  "../../layouts/DashboardLayout";

import api from "../../services/api";

function Notifications() {

  const [
    notifications,
    setNotifications
  ] = useState([]);

  const fetchNotifications =
    async () => {

      try {

        const token =
          localStorage.getItem("token");

        const { data } = await api.get(
          "/notifications",
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

        setNotifications(data);

      } catch (error) {

        console.log(error);
      }
    };

  const markRead =
    async (id) => {

      try {

        const token =
          localStorage.getItem("token");

        await api.put(
          `/notifications/${id}/read`,
          {},
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

        fetchNotifications();

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    fetchNotifications();

  }, []);

  return (
    <DashboardLayout>

      <div>

        <h1 className="text-4xl font-black">
          Notifications
        </h1>

        <p className="text-zinc-500 mt-2">
          Stay updated with your team.
        </p>

      </div>

      <div className="mt-10 flex flex-col gap-5">

        {notifications.map(
          (notification) => (

            <div
              key={notification._id}
              className={`glass-card rounded-3xl p-6 flex items-center justify-between

              ${
                !notification.read
                  ? "border border-orange-400"
                  : ""
              }`}
            >

              <div>

                <p className="text-lg">
                  {
                    notification.message
                  }
                </p>

                <span className="text-zinc-500 text-sm">

                  {new Date(
                    notification.createdAt
                  ).toLocaleString()}

                </span>

              </div>

              {!notification.read && (

                <button
                  onClick={() =>
                    markRead(
                      notification._id
                    )
                  }
                  className="bg-orange-400 text-black px-5 py-3 rounded-xl font-bold"
                >
                  Mark Read
                </button>

              )}

            </div>

          )
        )}

      </div>

    </DashboardLayout>
  );
}

export default Notifications;